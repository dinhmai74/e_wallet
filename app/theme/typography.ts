import {} from "react-native-elements"

const type = {
  base: "Montserrat-Regular",
  black: "Montserrat-Black",
  blackItalic: "Montserrat-BlackItalic",
  bold: "Montserrat-Bold",
  boldItalic: "Montserrat-BoldItalic",
  extraBold: "Montserrat-ExtraBold",
  extraBoldItalic: "Montserrat-ExtraBoldItalic",
  extraLight: "Montserrat-ExtraLight",
  extraLightItalic: "Montserrat-ExtraLightItalic",
  italic: "Montserrat-Italic",
  light: "Montserrat-Light",
  lightItalic: "Montserrat-LightItalic",
  medium: "Montserrat-Medium",
  mediumItalic: "Montserrat-MediumItalic",
  semiBold: "Montserrat-SemiBold",
  semiBoldItalic: "Montserrat-SemiBoldItalic",
  thin: "Montserrat-Thin",
  thinItalic: "Montserrat-ThinItalic",
}

export type FontTypes = keyof typeof type

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 21,
  h6: 19,
  s1: 18,
  s2: 16,
  c1: 20,
  c2: 18,
  label: 20,
  p1: 17,
  p2: 15,
  p3: 13,
  p4: 11,
  input: 14,
  base: 15,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5,
  numPad: 24,
  button: 20,
  instructionTitle: 22,
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.base,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h5Bold: {
    fontFamily: type.bold,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
  },
  h6Bold: {
    fontFamily: type.bold,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  normalBold: {
    fontFamily: type.bold,
    fontSize: size.regular,
  },
  instructionTitle: {
    fontFamily: type.base,
    fontSize: size.instructionTitle,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  descriptionBold: {
    fontFamily: type.bold,
    fontSize: size.medium,
  },
  textInput: {
    fontFamily: type.base,
    fontSize: size.input,
  },
  numPad: {
    fontFamily: type.base,
    fontSize: size.numPad,
  },
  button: {
    fontFamily: type.base,
    fontSize: size.button,
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  smallBold: {
    fontFamily: type.bold,
    fontSize: size.small,
  },
}

export type FontStyles = keyof typeof style

export const Fonts = {
  type,
  size,
  style,
}
