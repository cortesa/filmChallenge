import "./DotNav.scss"

type DotNavProps = {
  count: number
  currentIndex: number
  onSelect: (idx: number) => void
}

export function DotNav({ count, currentIndex, onSelect }: DotNavProps) {
  if (count <= 1) return null

  return (
    <div className="carousel-dots" role="tablist" aria-label="Carousel pagination">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-label={`Go to item ${i + 1}`}
          aria-selected={currentIndex === i}
          className={`dot${currentIndex === i ? " active" : ""}`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  )
}
