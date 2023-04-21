import { RefObject, useRef, useEffect } from "react"
import Typed from "typed.js"
import { grids } from "../../assets/grids"

export function useTypingAnimation(elementRef: RefObject<HTMLParagraphElement>, gridId: number) {
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (elementRef.current) {
      typed.current = new Typed(elementRef.current, getTypedOptions(gridId))

      return () => {
        if (typed.current) typed.current.destroy()
      }
    }
  }, [gridId, elementRef])
}

const TYPE_SPEED = 50
function getTypedOptions(gridId: number) {
  const entireString = grids[gridId].dialogue.reduce((previousValue: string, currentValue: string): string => {
    return previousValue + `-${currentValue}<br/>`
  }, "")

  return {
    strings: [entireString],
    typeSpeed: TYPE_SPEED,
    showCursor: false,
  }
}
