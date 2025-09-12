
export function minutesToHM({ minutes }:{minutes?: number | null}) {
	if (minutes == null) return `--h --m`

	const h = Math.floor(minutes / 60)
	const m = minutes % 60

	if (h > 0 && m > 0) return `${h}h ${m}m`
	if (h > 0) return `${h}h`
	return `${m}m`
}