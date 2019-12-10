import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Item, Input, Label, Thumbnail } from "native-base"
import { spacing, palette, metrics } from "theme"
import { icons } from "components/icon"

interface Props {
  phoneNumber?: string
}

export class RecentPhoneNumber extends Component<Props, {}> {
  render() {
    const { phoneNumber } = this.props
    return (
      <Item
        style={{ paddingBottom: spacing[2], paddingLeft: spacing[2], marginTop: spacing[4] }}
      >
        <Thumbnail source={icons.beef} small />
        <Label style={{ color: palette.navy, paddingLeft: spacing[2] }}>{phoneNumber}</Label>
        <Input disabled />
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

export default RecentPhoneNumber
