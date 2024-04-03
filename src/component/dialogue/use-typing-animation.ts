import { RefObject, useRef, useEffect } from "react"
import Typed from "typed.js"
import { grids } from "../../assets/grids"

const TYPE_SPEED = 50

export function useTypingAnimation(elementRef: RefObject<HTMLParagraphElement>, gridId: number) {
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (elementRef.current) {
      typed.current = new Typed(elementRef.current, getTypedOptions(formatDialogue(gridId), TYPE_SPEED))

      return () => {
        if (typed.current) typed.current.destroy()
      }
    }
  }, [gridId, elementRef])
}

function getTypedOptions(string: string, typeSpeed: number) {
  return {
    strings: [string],
    typeSpeed,
    showCursor: false,
  }
}

function formatDialogue(gridId: number): string {
  return grids[gridId].dialogue.reduce((previousValue: string, currentValue: string): string => {
    return previousValue + `-${currentValue}<br/>`
  }, "")
}
