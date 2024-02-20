type Book = {
  author: string
  title: string
  price: number
}

type ActionTypes = `update-${keyof Book}`

type Actions<T, K extends keyof T & string> = {
  type: `update-${K}`
  payload: T[K]
}

type UpdateTitleAction = Actions<Book, "title">

// ____________________

type Linked<T> = {
  value: T
  next?: Linked<T>
}

const TextLinked: Linked<string> = {
  value: "hello",
  next: {
    value: "world",
    next: {
      value: "!",
    },
  },
}

const buildLink = <T>(value: T): Linked<T> => {
  return {
    value,
  }
}

//above buildLink code is so you don't have to do:
// const buildLinkString = (value:string): Linked<string> => {
//   return {
//     value
//   }
// }
// const buildLinkNumber = (value:number): Linked<number> => {
//   return {
//     value
//   }
// }

const stringLinked = buildLink("hello")
const numberLinked = buildLink(1)
