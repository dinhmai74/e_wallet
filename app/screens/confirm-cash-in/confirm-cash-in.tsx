import React, { Component } from "react"
import { Screen, Text } from "components"
import { color } from "theme"
import { ViewStyle } from "react-native"
import DisplayMoney from "screens/confirm-cash-in/display-money"
import InputBank from "screens/confirm-cash-in/input-bank"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  // paddingHorizontal: spacing[2],
}

export class ConfirmCashIn extends Component {
  render() {
    return (
      <Screen style={ROOT} backgroundColor={color.transparent} preset="scroll">
        <Text preset="header" tx="cash" />
        <DisplayMoney />
        <InputBank />
      </Screen>
    )
  }
}

export default ConfirmCashIn
