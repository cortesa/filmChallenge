type ResourceStatus = 'pending' | 'resolved' | 'rejected'

type ResourceRecord<T> = {
	status: ResourceStatus
	promise: Promise<void> | null
	data: T | null
	error: unknown
	timestamp: number // when it was resolved
	staleTime: number // milliseconds considered fresh
}

const cache = new Map<string, ResourceRecord<unknown>>()

export function readResource<T>({
	key,
	load,
	staleTime = 60_000 // 1 minute
}: {
	key: string
	load: () => Promise<T>
	staleTime?: number
}): T {
	let rec = cache.get(key) as ResourceRecord<T> | undefined
	const now = Date.now()

	const isStale =
		!rec ||
		(rec.status === 'resolved' &&
			rec.staleTime > 0 &&
			now - rec.timestamp > rec.staleTime)

	if (!rec || isStale) {
		const record: ResourceRecord<T> = {
			status: 'pending',
			promise: null,
			data: null,
			error: null,
			timestamp: now,
			staleTime
		}

		record.promise = load().then(
			(d) => {
				record.status = 'resolved'
				record.data = d
				record.timestamp = Date.now()
			},
			(e) => {
				record.status = 'rejected'
				record.error = e
			}
		)

		cache.set(key, record as ResourceRecord<unknown>)
		rec = record
	}

	if (rec.status === 'pending') throw rec.promise
	if (rec.status === 'rejected') throw rec.error
	return rec.data as T
}

export function clearResource({ key }: { key: string }): void {
	cache.delete(key)
}