// type callback = (result: number) => void

// function add(a: number, b: number): Promise<number>
// function add(a: number, b: number, fn: callback): void
// function add(a: number, b: number, fn?: callback) {
//   const result = a + b;
//   if(fn) fn(result)
//   else return Promise.resolve(result)
// }
type callback = (result: number) => number

function add(a: number, b: number): number
function add(a: number): callback
function add(a: number, b?: number): number | callback {
  if (b === undefined) {
    return (b: number) => a + b
  }
  return a + b
}

add(2, 3) // returns 5
add(4) // returns a function that accepts the second number

const addThree = add(3)
addThree(4) // returns 7
