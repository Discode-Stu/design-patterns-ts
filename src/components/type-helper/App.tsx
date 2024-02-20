import Input from "./input"

function App() {
  return (
    <>
      {" "}
      <Input
        label="Name"
        value="Codelicks"
        onChange={() => {
          console.log("hi")
        }}
      />
      <Input label="Name" />
      <Input label="Name" value="Codelicks" />
      <Input
        label="Name"
        onChange={() => {
          console.log("fix error")
        }}
      />
    </>
  )
}

export default App
