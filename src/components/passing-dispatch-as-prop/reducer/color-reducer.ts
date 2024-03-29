import { rgb } from "color-convert"

type HexColor = `#${string}`

export const isHexColor = (str: string): str is HexColor => {
  return str.startsWith("#")
}

type RGBString = `rgb(${number}, ${number}, ${number})`

type ColorFormats = "rgb" | "hex"
type ActionTypes = `update-${ColorFormats}`

export type UpdateHexAction = {
  type: "update-hex"
  payload: {
    hexColor: string
  }
}

export type UpdateRGBAction = {
  type: "update-rgb"
  payload: {
    rgb: [number, number, number]
  }
}

export type ColorState = {
  hexColor: string
}

export const initState: ColorState = {
  hexColor: "#c2025e",
}

export type ColorActions = UpdateHexAction | UpdateRGBAction

export const colorReducer = (
  state: ColorState = initState,
  action: ColorActions
) => {
  if (action.type === "update-hex") {
    const { hexColor } = action.payload
    return { ...state, hexColor }
  }

  if (action.type === "update-rgb") {
    const hexColor = "#" + rgb.hex(...action.payload.rgb)

    return { ...state, hexColor }
  }
  return state
}
