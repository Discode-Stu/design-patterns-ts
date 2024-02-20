import { Dispatch, PropsWithChildren, useReducer } from "react"
import { ColorActions, colorReducer, initState } from "../reducer/color-reducer"
import { createContext } from "./create-context"

// export const ColorContext = createContext<{
//   hexColor: string
//   dispatch?: Dispatch<ColorActions>
// }>({ hexColor: "#BCA68F" })

type ColorContextState = {
  hexColor: string
  dispatch: Dispatch<ColorActions>
}

export const [useContext, ContextProvider] = createContext<ColorContextState>()

const useHexColor = () => {
  const { hexColor } = useContext()
  return hexColor
}

const useDispatch = () => {
  const { dispatch } = useContext()
  return dispatch
}

// export const ColorContext = createContext<ColorContextState>({
//   hexColor: "#BCA68F",
// } as ColorContextState)

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initState)

  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
    // <ColorContext.Provider value={{ hexColor, dispatch }}>
    //   {children}
    // </ColorContext.Provider>
  )
}
