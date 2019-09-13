import { TextStyle, ViewStyle } from "react-native"
import { ButtonPresetNames } from "./button.presets"
import { NativeBase } from "native-base"
import { TranslateKey } from "i18n/lang"

// tslint:disable-next-line: interface-name
export interface ButtonProps extends NativeBase.Button {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TranslateKey
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: TextStyle | TextStyle[]

  /**
   * One of the different types of text presets.
   */
  preset?: ButtonPresetNames

  /**
   * One of the different types of text presets.
   */
  children?: any
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: object

  linear?: boolean

  full?: boolean
  rounded?: boolean
}
