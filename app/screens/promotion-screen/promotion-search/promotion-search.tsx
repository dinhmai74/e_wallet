import React, { Component } from "react"
import { Item, Input, Icon } from "native-base"
import { color, spacing, palette } from "theme"
import { View } from "react-native"

export class PromotionSearch extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: spacing[3] }}>
        <Item rounded style={{ paddingHorizontal: spacing[3] }}>
          <Icon name="ios-search" style={{ color: color.line }} />
          <Input
            placeholder="Card..."
            placeholderTextColor={palette.blueGrey}
            style={{ fontSize: 14 }}
          />
        </Item>
      </View>
    )
  }
}

export default PromotionSearch
