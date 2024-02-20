const DisplayMousePos = ({ x, y }: { x: number; y: number }) => {
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

export default DisplayMousePos
