import { FontTypes } from "theme"
import { NativeBase } from "native-base"
import React from "react"
import { TextPresets } from "./text.presets"
import { TranslateKey } from "i18n/lang"

// tslint:disable-next-line: interface-name
export interface TextProps extends NativeBase.Text {
  /**
   * Children components.
   */
  children?: React.ReactNode

  // 24
  h1?: boolean
  // 16
  b1?: boolean
  // 12
  b2?: boolean
  // 18
  t1?: boolean

  /**
   * bold?
   */

  bold?: boolean

  /**
   * Text which is looked up via i18n.
   */
  tx?: TranslateKey

  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: object

  // size of text
  size?: number

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string | number

  /**
   * An optional style override useful for padding & margin.
   */

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresets

  /*
   * font type
   */
  fontType?: FontTypes

  /**
   * color of text
   */
  color?: string
}
