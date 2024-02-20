import { ChangeEventHandler } from "react"

type TightProps<T extends Record<string, unknown>> = T | OptionalProps<T>

type OptionalProps<T extends Record<string, unknown>> = Partial<
  Record<keyof T, undefined>
> //use partial to add ? to all properties

// type example = OptionalProps<{
//   value: string
//   onChange: ChangeEventHandler
// }>

type InputProps = TightProps<{
  value: string
  onChange: ChangeEventHandler
}> & {
  label: string
}

// type InputProps = (
//   | {
//       value: string
//       onChange: ChangeEventHandler
//     }
//   | {
//       value?: undefined
//       onChange?: undefined
//     }
// ) & {
//   label: string
// }

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  )
}

export default Input
