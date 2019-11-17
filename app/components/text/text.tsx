import { flatten, mergeAll } from "ramda"
import * as React from "react"
import { Text as NBText } from "native-base"
// @ts-ignore
import { translate } from "i18n"
// @ts-ignore
import { Fonts } from "theme"
import { presets } from "./text.presets"
import { TextProps } from "./text.props"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const {
    preset = "default",
    tx,
    txOptions,
    text,
    children,
    color,
    style: styleOverride,
    h1,
    t1,
    b1,
    b2,
    size,
    bold,
    fontType,
    ...rest
  } = props

  // figure out which content to use
  const i18nText = tx && translate(tx)
  const content = i18nText || text || children

  const style = mergeAll(
    flatten([
      presets[preset] || presets.default,
      h1 && { fontSize: Fonts.size.h1 },
      b1 && { fontSize: Fonts.size.b1 },
      b2 && { fontSize: Fonts.size.b2 },
      t1 && { fontSize: Fonts.size.t1 },
      bold && presets.bold,
      fontType && { fontFamily: Fonts.type[fontType] },
      size && { fontSize: size },
      color && { color },
      styleOverride,
    ]),
  )

  return (
    // @ts-ignore
    <NBText {...rest} style={style}>
      {content}
    </NBText>
  )
}
