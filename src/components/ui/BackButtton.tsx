import "./BackButton.scss"

export function BackButton () {
  return (
    <button className="BackButton" onClick={() => window.history.back()}>
      {"<<"}
    </button>
  )
}
