import { useEffect, useRef, useState } from "react"

export function useOutsideClick<T extends HTMLElement>(
  onOutsideClick: () => void,
  refOverrides?: (HTMLElement | null)[]
) {
  const [ ref, setRef ] = useState<T | null>(null)
  const refOverridesRef = useRef(refOverrides)
  refOverridesRef.current = refOverrides

  useEffect(() => {
    if (!ref && !refOverridesRef.current?.length) return

    const onClick = (event: MouseEvent) => {
      if (ref) {
        if (ref === event.target || ref.contains(event.target as any)) return
      }
      if (refOverridesRef.current?.length) {
        if (refOverridesRef.current.some(ref => (
          ref === event.target || ref?.contains(event.target as any)
        ))) return
      }
      onOutsideClick()
    }
    window.addEventListener("click", onClick)

    return () => {
      window.removeEventListener("click", onClick)
    }
  }, [ ref, onOutsideClick ])

  return [ ref, setRef ] as const
}
