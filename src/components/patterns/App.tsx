import "./App.css"
// import { DisplayMouseMove } from "./higher-order-components/hoc/displayMouseMove"
// import withMousePosition from "./higher-order-components/hoc/withMousePositions"
// import MousePosition from "./higher-order-components/components/position"
// import { RenderMousePosition } from "./render-props/render-mouse"
// import DisplayMousePos from "./render-props/display-mouse"
// import { useMousePosition } from "./hook/useMousePosition"

import LimitingPropCompositionApp from "./limiting-prop-composition/App.tsx"

import RequiringPropCompositionApp from "./requiring-prop-composition/App.tsx"

function App() {
  // const Wrapper = withMousePosition(DisplayMouseMove)

  //hooks
  // const { x, y, onMouseMove } = useMousePosition()

  return (
    <div className="">
      {/* <div className="container"> */}
      {/* <MousePosition /> */}

      {/* <Wrapper /> */}
      {/* <RenderMousePosition>
        {({ x, y }) => <DisplayMousePos x={x} y={y} />}
      </RenderMousePosition> */}

      {/* <div className="relative-container" onMouseMove={onMouseMove}>
        <section className="absolute-section">
          <p className="paragraph">
            <span className="bold-span">X</span>: {x}
          </p>
          <p className="paragraph">
            <span className="bold-span">Y</span>: {y}
          </p>
        </section>
      </div> */}
      {/* <LimitingPropCompositionApp /> */}
      <RequiringPropCompositionApp />
    </div>
  )
}

export default App
