import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Item, Input } from "native-base"
import { spacing, palette } from "theme"

interface Props {
  placeholder: string
}

interface State {
  text: string
}

export class CustomInput extends Component<Props, State> {
  render() {
    const { placeholder } = this.props
    const { text } = this.state
    return (
      <Item style={{ marginBottom: spacing[5] }}>
        <Input
          placeholder={placeholder}
          placeholderTextColor={palette.grey}
          style={styles.styleInput}
          onChangeText={text => this.setState({ text })}
          value={text}
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
