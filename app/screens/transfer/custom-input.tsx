import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Item, Input } from "native-base"
import { spacing, palette } from "theme"

interface Props {
  placeholder: string
}

export class CustomInput extends Component<Props, {}> {
  render() {
    const { placeholder } = this.props
    return (
      <Item style={{ marginBottom: spacing[4] }}>
        <Input
          placeholder={placeholder}
          placeholderTextColor={palette.grey}
          style={styles.styleInput}
        />
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  styleInput: {
    // paddingBottom: spacing[2],
    fontSize: 14,
  },
})

export default CustomInput
