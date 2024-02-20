import React from "react"

// eslint-disable-next-line @typescript-eslint/ban-types
export const createContext = <T extends {}>() => {
  const Context = React.createContext<T | undefined>(undefined)

  const useContext = () => {
    const colorContext = React.useContext(Context)

    if (colorContext === undefined) {
      throw new Error("A value must be provided to the useContext.")
    }
    return colorContext
  }

  return [useContext, Context.Provider] as const
}
