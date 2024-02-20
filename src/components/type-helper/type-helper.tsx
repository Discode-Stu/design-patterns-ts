type Menu = "home" | "products" | "about"
type ButtonVariant = "primary" | "secondary"

type StringHelper = string & NonNullable<unknown>
// type NumberHelper = number & {}

type FlexibleMenu = FlexibleAutocomplete<Menu>
type FlexibleButtonVariant = FlexibleAutocomplete<ButtonVariant>

// type FlexibleAutocomplete<T> = 'something';
type FlexibleAutocomplete<T> = T | StringHelper

type example = FlexibleAutocomplete<Menu>

export const menus: FlexibleMenu[] = ["home", "products", "about", "other..."]

export const buttonVariants: FlexibleButtonVariant[] = [
  "primary",
  "secondary",
  "other...",
]
