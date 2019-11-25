import * as React from "react"
import { Text, View } from ".."
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
    preset = "primary",
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    disabled,
    ...rest
  } = props

  const viewStyle = mergeAll(
    flatten([preset && viewPresets[preset], styleOverride, disabled && { opacity: 0.3 }]),
  )
  const textStyle = mergeAll(flatten([textPresets[preset], textStyleOverride]))

  const content = children || <Text tx={tx} text={text} style={textStyle} />

  return (
    <NBButton disabled={disabled} style={[viewStyle]} {...rest}>
      {content}
    </NBButton>
  )
}
