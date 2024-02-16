import { useEffect, useRef, useState } from "react"
import Loader from "./components/loader/loader"
import "./App.css"
import axios from "axios"
import Book from "./components/books/book"
import Books from "./components/books/books"

// axios.defaults.baseURL = ""

export type Book = {
  id: number
  title: string
  author?: string
}

export const fetchRandomBook = async () => {
  const response = await axios.get(`/api/books/random`)
  return response.data
}

// export const fetchBook = async (count: number) => {
//   const response = await axios.get(`/api/books?limit=${count}`)
//   return response.data
// }
export const fetchBooks = async (count: number) => {
  const response = await axios.get(`/api/books?limit=${count}`)
  return response.data
}

// function App() {
//   const [books, setBooks] = useState<Book[]>([])
//   // const [book, setBook] = useState<Book | undefined>()

//   // useEffect(() => {
//   //   fetchRandomBook().then(setBook)
//   // }, [])

//   // if (!book) return <Loader />

//   // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault()
//   //   const form = e.currentTarget as HTMLFormElement
//   //   const count = (form.elements[0] as HTMLInputElement).value
//   //   fetchBooks(Number(count)).then(setBooks)
//   // }

//   return (
//     <main className="w-full max-w-2xl py-16 mx-auto">
//       {/* <Book title={book.title} author={book.author} /> */}
//       <Books
//         // onChange={(e) => setCount(e.target.valueAsNumber)}
//         // onSubmit={() => fetchBooks(count).then(setBooks)}
//         // // onSubmit={onSubmit}
//         // count={count || 0}

//         setBooks={setBooks}
//       >
//         {books?.map((book: Book) => (
//           <Book key={book.id} title={book.title} author={book.author} />
//         ))}
//       </Books>
//     </main>
//   )
// }

// function App() {
//   const inputRef = useRef<HTMLInputElement>(null)
//   const mutableRefValue = useRef(20)

//   inputRef.current?.focus()

//   mutableRefValue.current = 100

//   return (
//     <>
//       <input ref={inputRef} />
//     </>
//   )
// }

// export const useUrl = (defaultUrl: string) => {
//   const [url, setUrl] = useState(defaultUrl)

//   // return [url, setUrl]
//   // return [url, setUrl] as [string, React.Dispatch<React.SetStateAction<string>>]
//   return [url, setUrl] as const
// }

// function App() {
//   const [url, setUrl] = useUrl("google.com")

//   return <>{url}</>
// }

// export default App

// import { useUser } from "./components/use-user"

// function App() {
//   const state = useUser("/user")
//   console.log("🚀 ~ App ~ state:", state)

//   // if (state === "non-existing-state") {
//   //   return "hi"
//   // }

//   if (state === "fetching") {
//     return "fetching..."
//   }

//   if (state === "fetched") {
//     return "fetched"
//   }

//   if (state === "error") {
//     return "Error"
//   }
//   return <></>
// }

// export default App

import { useUser } from "./components/use-user"

function App() {
  const [status, value] = useUser<{ name: string }>("/user")

  if (status === "fetching") {
    return <div>Fetching...</div>
  }

  if (status === "error") {
    return <div>Error: {value.message}</div>
  }

  return <div>{value.name}</div>
}

export default App
