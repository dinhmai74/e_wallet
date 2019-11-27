import * as React from "react"
import { Text, View } from ".."
import { Button as NBButton } from "native-base"
import { viewPresets, textPresets } from "./button.presets"
import { ButtonProps } from "./button.props"
import { mergeAll, flatten } from "ramda"
import { AppLoading } from "components/app-loading"
import { color } from "theme"
import { StyleSheet } from "react-native"

export { ButtonProps }

export function Button({
  preset = "primary",
  tx,
  text,
  style: styleOverride,
  textStyle: textStyleOverride,
  children,
  disabled,
  loading,
  ...rest
}: ButtonProps) {
  const viewStyle = mergeAll(
    flatten([preset && viewPresets[preset], styleOverride, disabled && { opacity: 0.3 }]),
  )

  const loadingColor = loading ? color.palette.white : color.transparent
  const textColor = loading && { color: color.transparent }

  const textStyle = mergeAll(flatten([textPresets[preset], textStyleOverride, textColor]))

  const content = children || <Text tx={tx} text={text} style={textStyle} />

  return (
    <NBButton disabled={disabled} style={[viewStyle]} {...rest}>
      <AppLoading color={loadingColor} style={styles.loading} />
      {content}
    </NBButton>
  )
}

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
  },
})
