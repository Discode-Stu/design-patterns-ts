import { MouseEventHandler, useCallback, useReducer } from "react"
import { getPosition } from "./get-pos"

const initialState = { x: 0, y: 0 }

type UpdatePositionAction = {
  type: "updatePosition"
  payload: Partial<typeof initialState> // Partial is used to make all properties optional
}

const reducer = (state = { x: 0, y: 0 }, action: UpdatePositionAction) => {
  if (action.type === "updatePosition") {
    return { ...state, ...action.payload }
  }

  return state
}

// const MousePosition = () => {
//   const [{ x, y }, dispatch] = useReducer(reducer, initialState)

//   const updatePosition = useCallback<MouseEventHandler>(
//     (event) =>
//       dispatch({ type: "updatePosition", payload: getPosition(event) }),
//     [dispatch]
//   )

//   return (
//     <div className="relative-container" onMouseMove={updatePosition}>
//       <section className="absolute-section">
//         <p className="paragraph">
//           <span className="bold-span">X</span>: {x}
//         </p>
//         <p className="paragraph">
//           <span className="bold-span">Y</span>: {y}
//         </p>
//       </section>
//     </div>
//   )
// }

// export default MousePosition

//TODO
//create a presentational component called DisplayMousePositon
//create a higher order component called with withMouseMove
//wrap the presentational component with the HOC in App.tsx
//***Hint*** You may need the Omit utility helper in creating the HOC

const DisplayMousePostion = ({ x, y }: { x: number; y: number }) => {
  return (
    <section className="absolute-section">
      <p className="paragraph">
        <span className="bold-span">X</span>: {x}
      </p>
      <p className="paragraph">
        <span className="bold-span">Y</span>: {y}
      </p>
    </section>
  )
}

const withMouseMove = (
  Component: React.ComponentType<{ x: number; y: number }>
) => {
  const WrappedComponent = (
    props: Omit<React.ComponentProps<typeof Component>, "x" | "y">
  ) => {
    const [{ x, y }, dispatch] = useReducer(reducer, initialState)

    const updatePosition = useCallback<MouseEventHandler>(
      (event) =>
        dispatch({ type: "updatePosition", payload: getPosition(event) }),
      [dispatch]
    )

    return (
      <div className="relative-container" onMouseMove={updatePosition}>
        <Component {...props} x={x} y={y} />
      </div>
    )
  }
  return WrappedComponent
}

const MousePositionWithHOC = withMouseMove(DisplayMousePostion)
export default MousePositionWithHOC
