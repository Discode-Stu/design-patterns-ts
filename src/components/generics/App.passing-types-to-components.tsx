import { ReactNode } from "react"

interface ProductListProps<T> {
  rows: T[]
  renderRow: (row: T) => ReactNode
}

export const ProductList = <T,>(props: ProductListProps<T>) => {
  return <ul>{props.rows.map((row) => props.renderRow(row))}</ul>
}

interface product {
  id: number
  title: string
}

function App() {
  return (
    <div>
      <ProductList<product>
        rows={[12, "slkjjlkj", 3]}
        renderRow={(row) => <li>{row.title}</li>}
      />
      <ProductList<product>
        rows={[
          { id: 1, title: "product" },
          { id: "34", title: 3344 },
        ]}
        renderRow={(row) => {
          return <li>{row.title}</li>
        }}
      ></ProductList>
    </div>
  )
}

export default App
