import { useCallback, useMemo } from "react"
import { atom, useAtomValue, useSetAtom } from "jotai"

export type Id = number | undefined

const WhishListIdsAtom = atom<Id[]>([])

const isInWhishListAtom = atom((get) => {
  return (id: Id) => get(WhishListIdsAtom).includes(id)
})

const addToWhishListAtom = atom(
  null,
  (get, set, id: Id) => {
    const curr = get(WhishListIdsAtom)
    if (!curr.includes(id)) set(WhishListIdsAtom, [...curr, id])
  }
)

const removeFromWhishListAtom = atom(
  null,
  (get, set, id: Id) =>
    set(
      WhishListIdsAtom,
      get(WhishListIdsAtom).filter((x) => x !== id)
    )
)

export type UseWishListReturn = {
  list: Id[]
  count: number
  isIn: (id: Id) => boolean
  add: (id: Id) => void
  remove: (id: Id) => void
  toggle: (id: Id) => void
  clear: () => void
}

export function useWishList(): UseWishListReturn {
  const list = useAtomValue(WhishListIdsAtom)
  const isIn = useAtomValue(isInWhishListAtom)
  const _add = useSetAtom(addToWhishListAtom)
  const _remove = useSetAtom(removeFromWhishListAtom)
  const setIds = useSetAtom(WhishListIdsAtom)

  const add = useCallback((id: Id) => _add(id), [_add])
  const remove = useCallback((id: Id) => _remove(id), [_remove])

  const toggle = useCallback(
    (id: Id) => {
      if (isIn(id)) remove(id)
      else add(id)
    },
    [isIn, add, remove]
  )

  const clear = useCallback(() => setIds([]), [setIds])

  const count = useMemo(() => list.length, [list])

  return { list, count, isIn, add, remove, toggle, clear }
}
