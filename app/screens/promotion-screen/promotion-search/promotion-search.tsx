import React, { Component } from "react"
import { Item, Input, Icon } from "native-base"
import { color, spacing } from "theme"
import { View } from "react-native"

export class PromotionSearch extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: spacing[3] }}>
        <Item rounded style={{ paddingHorizontal: spacing[3] }}>
          <Input placeholder="Rounded Textbox" />
          <Icon name="ios-search" style={{ color: color.line }} />
        </Item>
      </View>
    )
  }
}

export default PromotionSearch
