import { ViewStyle, TextStyle } from "react-native"
import { IconTypes } from "../icon"
import { TranslateKey } from "i18n/lang"
import { PresetsType } from "components/header/header.presets"

export interface HeaderProps {
  /**
   * Main header, e.g. POWERED BY BOWSER
   */
  headerTx?: TranslateKey

  /**
   * header non-i18n
   */
  headerText?: string

  content?: any

  /* ------------- presets type ------------- */
  preset?: PresetsType

  /**
   * Icon that should appear on the left
   */
  leftIcon?: IconTypes

  /**
   * What happens when you press the left icon
   */
  onLeftPress?(): void

  /**
   * Icon that should appear on the right
   */
  rightIcon?: IconTypes

  /**
   * What happens when you press the right icon
   */
  onRightPress?(): void

  /**
   * Container style overrides.
   */
  style?: ViewStyle

  /**
   * Title style overrides.
   */
  titleStyle?: TextStyle
}
