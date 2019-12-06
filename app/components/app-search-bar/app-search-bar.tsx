import * as React from "react"
import { StyleSheet, TextInput, View, ViewStyle } from "react-native"
import { Text } from "../text"
import { color, spacing } from "theme"
import { Icon, SizedBox } from "components"
import { AppInputField } from "components/app-input-field"
import { translate } from "i18n"

export interface AppSearchBarProps {
  placeholder?: string
  style?: ViewStyle
  containerStyle?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function AppSearchBar(props: AppSearchBarProps) {
  // grab the props
  const { placeholder, style,containerStyle, ...rest } = props

  const placeholderTx = translate(placeholder)

  return (
    <View style={[styles.container, containerStyle]}>
      <Icon icon={"iconSearch"} />
      <SizedBox h={1} w={3} />
      <TextInput
        placeholder={placeholderTx}
        style={[styles.input, style]}
        placeholderTextColor={color.textDescription}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderWidth: 0.5,
    borderColor: color.borderBlue,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    color: color.textNavy,
  },
})
