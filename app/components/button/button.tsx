import * as React from "react"
import { Text } from "../text"
import { Button as NBButton } from "native-base"
import { viewPresets, textPresets } from "./button.presets"
import { ButtonProps } from "./button.props"
import { mergeAll, flatten } from "ramda"

export { ButtonProps }

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset,
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props

  const viewStyle = mergeAll(flatten([preset && viewPresets[preset], styleOverride]))
  const textStyle = mergeAll(
    flatten([textPresets[preset] || textPresets.primary, textStyleOverride]),
  )

  const content = children || <Text tx={tx} text={text} style={textStyle} />

  return (
    <NBButton style={viewStyle} {...rest}>
      {content}
    </NBButton>
  )
}
