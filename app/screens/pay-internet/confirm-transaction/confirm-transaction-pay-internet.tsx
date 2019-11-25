import React, { Component } from "react"
import { ViewStyle } from "react-native"
import { View, Screen, Text, Button } from "components"
import { spacing, color, palette } from "theme"
import Indicator from "screens/pay-internet/confirm-transaction/indicator"
import { Wallet } from "screens/pay-internet/confirm-transaction/wallet"
import InformationCard from "./information-card"
import { Left, Right } from "native-base"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5],
}

export class ConfirmTrasactionPayInternet extends Component {
  render() {
    return (
      <View full>
        <Screen style={ROOT} backgroundColor={color.transparent} preset="scroll">
          <Text preset="header" tx="internetBillPayment" style={{ paddingTop: 30 }} />
          <Indicator title="wallet" />
          <Wallet />
          <Indicator title="info" />
          <InformationCard />
          <View style={{ flexDirection: "row", paddingTop: spacing[5], paddingBottom: spacing[5] }}>
            <Left>
              <Text tx="total" s2 color={palette.blueGrey} />
            </Left>
            <Right>
              <Text tx="moneyTest" s2 color={palette.navy} />
            </Right>
          </View>
          <Button bordered onPress={() => {}} style={{ backgroundColor: palette.warmPink }}>
            <Text tx="confirm" style={{ color: palette.white }} />
          </Button>
        </Screen>
      </View>
    )
  }
}

export default ConfirmTrasactionPayInternet
