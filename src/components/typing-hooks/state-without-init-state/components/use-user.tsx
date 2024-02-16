// import { useState, useEffect } from "react"

// type State = "fetching" | "fetched" | "error"

// export const useUser = (src: string) => {
//   const [state, setState] = useState<State>("fetching")

//   useEffect(() => {
//     setState("fetching")

//     let aborted = false

//     fetch(src)
//       .then((data) => {
//         if (aborted) {
//           return
//         }

//         //do something with the data

//         setState("fetched")
//       })
//       .catch((error) => {
//         if (aborted) {
//           return
//         }
//         setState("error")
//       })

//     return () => {
//       aborted = true
//     }
//   }, [src])

//   return state
// }

// import { useState, useEffect } from "react"

// type State =
//   | { status: "fetching" }
//   | { status: "fetched" }
//   | { status: "error"; error: Error }

// export const useUser = (src: string) => {
//   const [state, setState] = useState<State>({ status: "fetching" })

//   useEffect(() => {
//     setState({ status: "fetching" })

//     let aborted = false

//     fetch(src)
//       .then((data) => {
//         if (aborted) {
//           return
//         }

//         //do something with the data

//         setState({ status: "fetched" })
//       })
//       .catch((error) => {
//         if (aborted) {
//           return
//         }
//         setState({ status: "error", error })
//       })

//     return () => {
//       aborted = true
//     }
//   }, [src])

//   return state.status
// }

import { useState, useEffect } from "react"

// export type Data<T> = ["fetching" | "success" | "error", T | Error | undefined]
export type Data<T> =
  | ["fetching", undefined?]
  | ["success", T]
  | ["error", Error]

export const useUser = <T,>(url: string): Data<T> => {
  const [data, setData] = useState<Data<T>>(["fetching"])
  // const [data, setData] = useState<Data<T>>(["fetching", undefined])

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(["success", data]))
      .catch((error) => setData(["error", error]))
  }, [url])

  return data
}
