import { TextStyle } from "react-native"
import { color, Fonts } from "theme"
/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: Fonts.type.base,
  color: color.textNavy,
}

const BOLD: TextStyle = {
  fontFamily: Fonts.type.bold,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, ...BOLD } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BOLD, fontSize: 24, color: color.textNavy } as TextStyle,

  /**
   * title card item
   */
  title: { ...BASE, ...BOLD, color: color.textNavy } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE, fontSize: Fonts.size.b1, color: color.primary } as TextStyle,
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,
  ...Fonts.style,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
