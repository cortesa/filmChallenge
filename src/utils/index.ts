export function minutesToHM({ minutes }: {minutes?: number | null}) {
  if (minutes == null) return `--h --m`

  const h = Math.floor(minutes / 60)
  const m = minutes % 60

  if (h > 0 && m > 0) return `${h}h ${m}m`
  if (h > 0) return `${h}h`

  return `${m}m`
}
type GetStatusColorArgs = { status?: string }

export function getStatusColor({ status }: GetStatusColorArgs): string {
  const map: Record<string, string> = {
    Released: "#5CFF5C",
    Rumored: "#FF5C5C",
    Canceled: "#FF5C5C",
    "Post Production": "#FFD95C",
  }

  return map[status ?? ""] ?? "#9AE1FF"
}
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
