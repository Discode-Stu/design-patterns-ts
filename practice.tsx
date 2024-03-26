import { ChangeEventHandler, ComponentProps, FC } from "react"

type ProfileProps1 = {
  showLinkedIn: true
  linkedInId: string
}

type ProfileProps2 = {
  showLinkedIn?: false
  githubId: string
}

type ProfileProps = ProfileProps1 | ProfileProps2

// Record<string, never>

type InputProps = (
  | {
      value: string
      onChange: ChangeEventHandler
    }
  | {
      value?: undefined
      onChange?: undefined
    }
) & {
  label: string
}


interface RowsProps {
  // renderRow: (index: number) => React.ReactNode
  renderRow: FC<{ index: number }>
}


const classNames = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
}

type example = keyof typeof classNames

type ButtonProps = {
  // variant: 'primary' | 'secondary' | 'tertiary'
  variant: keyof typeof classNames
}


// if you want to make sure the value is one of the keys of an object, you can use keyof typeof
// if you want to make sure it shows up in the auto suggest and you have something liek this:
type example2 = example | string
// then you can change it to this
type example3 = example | (string & NonNullable<unknown>)




const BUTTON_TYPES = {
  0: 'warning',
  1: 'success',
  2: 'error'
} as const // this is a const assertion. you need this for the rest to work correctly

type ButtonTypes = typeof BUTTON_TYPES

type TypesKeys = keyof typeof BUTTON_TYPES
type TypesValues = ButtonTypes[TypesKeys]




// type buttonTypes = Record<string, ComponentProps<'button'>>
// type buttonTypes = Record<"submit"|"reset"|"skip", ComponentProps<'button'>> // this is one way to do it but the satisfies keyword is better

const buttonProps: buttonTypes = {
  submit: {
    className: 'submit',
    type: 'submit',
    children: 'Submit'
    notallowedProperty: 'hi' // this will throw an error
  },
  reset: {
    className: 'reset',
    type: 'reset',
    children: 'Reset'
  },
  skip: {
    className: 'skip',
    type: 'button',
    children: 'Skip'
  }
} satisfies Record<string, ComponentProps<'button'>>