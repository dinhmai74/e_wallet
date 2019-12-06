import React, { Component } from "react"
import { ViewStyle } from "react-native"
import { View, Screen, Text, Button, TransactionSuccessfull, icons } from "components"
import { spacing, color, palette } from "theme"
import Indicator from "screens/pay-internet/confirm-transaction/indicator"
import { Wallet } from "screens/pay-internet/confirm-transaction/wallet"
import { Left, Right } from "native-base"
import { navigateService } from "utils"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  // paddingHorizontal: spacing[5],
}

export class PayInternetSuccessfull extends Component {
  goBackPayAnotherBill = () => {
    navigateService.navigate("payInternet")
  }
  render() {
    return (
      <View full>
        <Screen style={ROOT} backgroundColor={color.transparent} preset="scroll">
          <Text
            preset="header"
            tx="paymentInfo"
            style={{ paddingTop: 30, paddingLeft: spacing[5] }}
          />
          <TransactionSuccessfull
            titleInfo="transactionInfo"
            labelLineFirst="transactionType"
            titleLineFirst="internetPayment"
            labelLineSecond="customer"
            titleLineSecond="name"
            labelLineThird="month"
            titleLineThird="monthTest"
            labelLineFourth="total"
            titleLineFourth="moneyTest"
          />
          <View style={{ paddingHorizontal: spacing[5], paddingTop: spacing[8] }}>
            <Button bordered full onPress={this.goBackPayAnotherBill} tx="payAnotherBill" />
          </View>
        </Screen>
      </View>
    )
  }
}

export default PayInternetSuccessfull
