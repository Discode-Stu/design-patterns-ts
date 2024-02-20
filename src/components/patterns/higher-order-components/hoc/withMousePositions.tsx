import { MouseEventHandler, useCallback, useReducer, useState } from "react"
import { DisplayMouseMoveProps } from "./displayMouseMove"
import { getPosition } from "../components/get-pos"

const withMousePosition =
  <T extends NonNullable<unknown>>(
    Component: React.ComponentType<DisplayMouseMoveProps>
  ) =>
  (props: Omit<T, keyof DisplayMouseMoveProps>) => {
    const [{ x, y }, setPosition] = useState({ x: 0, y: 0 })

    const updatePosition = useCallback<MouseEventHandler>(
      (event) => {
        const { x, y } = getPosition(event)
        setPosition({ x, y })
      },

      [setPosition]
    )

    return (
      <Component {...(props as T)} x={x} y={y} onMouseMove={updatePosition} />
    )
  }

export default withMousePosition
