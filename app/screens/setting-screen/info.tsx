import React, { Component } from "react"
import { View } from "react-native"
import { icons, Text } from "components"
import { Thumbnail } from "native-base"
import { spacing, palette } from "theme"

export class Info extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", paddingBottom: spacing[5] }}>
        <Thumbnail source={icons.promotionImage} />
        <View style={{ paddingLeft: spacing[2] }}>
          <Text tx="name" style={{ color: palette.navy }} bold p1 />
          <Text tx="phoneNumber" style={{ color: palette.blueyGrey }} p3 />
        </View>
      </View>
    )
  }
}

export default Info
