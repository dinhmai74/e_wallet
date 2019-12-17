import React, { Component } from "react"
import { View, Image } from "react-native"
import { icons, Text } from "components"
import { spacing, palette } from "theme"

export class NoteBuyCardInfo extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: spacing[5],
          paddingTop: spacing[4],
          paddingBottom: spacing[3]
        }}
      >
        <Image source={icons.imageBuyPhoneCardInfo} style={{ width: 205, height: 205 }} />
        <Text
          tx="noteBuyPhoneCardInfo"
          b2
          color={palette.blueGrey}
          style={{ textAlign: "center" }}
        />
      </View>
    )
  }
}

export default NoteBuyCardInfo
