import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../text"
import { color, spacing } from "theme"
import { TextField, FilledTextField, OutlinedTextField } from "react-native-material-textfield"
import { useEffect, useRef, useState } from "react"
import { translate } from "i18n"

export interface AppInputFieldProps {
  onChangeText?: (text: string) => void
  label?: string
  ref?: any
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function AppInputField(props: AppInputFieldProps) {
  // grab the props
  const { ref, label, ...rest } = props
  let { ref: refProps } = props
  const refInput = useRef()
  useEffect(() => {
    refProps = refInput
  }, [refInput])

  const labelText = translate(label)

  return (
    <TextField
      tintColor={color.primary}
      baseColor={color.description}
      label={labelText}
      ref={refInput}
      {...rest}
    />
  )
}

AppInputField.defaultProps = {
  onChangeText: text => {},
  label: null,
}
