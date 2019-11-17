import { color } from "theme/color"

const type = {
  base: "Poppins-Regular",
  black: "Poppins-Black",
  blackItalic: "Poppins-BlackItalic",
  bold: "Poppins-Bold",
  boldItalic: "Poppins-BoldItalic",
  extraBold: "Poppins-ExtraBold",
  extraBoldItalic: "Poppins-ExtraBoldItalic",
  extraLight: "Poppins-ExtraLight",
  extraLightItalic: "Poppins-ExtraLightItalic",
  italic: "Poppins-Italic",
  light: "Poppins-Light",
  lightItalic: "Poppins-LightItalic",
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  mediumItalic: "Poppins-MediumItalic",
  semiBold: "Poppins-SemiBold",
  semiBoldItalic: "Poppins-SemiBoldItalic",
  thin: "Poppins-Thin",
  thinItalic: "Poppins-ThinItalic",
}

export type FontTypes = keyof typeof type

const size = {
  h1: 24,
  b1: 16,
  b2: 12,
  t1: 18,
}

const BASE = {
  fontFamily: type.base,
  fontSize: size.b1,
  color: color.textNavy,
}

const style = {
  h1: {
    ...BASE,
    fontSize: size.h1,
  },
  b1: {
    ...BASE,
    fontSize: size.b1,
  },
  b2: {
    ...BASE,
    fontSize: size.b2,
  },
  t1: {
    ...BASE,
    fontSize: size.t1,
  },
}

export type FontStyles = keyof typeof style

export const Fonts = {
  type,
  size,
  style,
}
