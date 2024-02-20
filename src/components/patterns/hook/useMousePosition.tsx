import { useState, MouseEventHandler, useCallback } from "react"

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const updatePosition = useCallback<MouseEventHandler>(
    (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    },
    [setPosition]
  )

  return { x: position.x, y: position.y, onMouseMove: updatePosition }
}
