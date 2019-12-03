import React, { Component } from "react"
import {
  Screen,
  Text,
  Button,
  View,
  icons,
  ItemGameCard,
  ItemGameCardProps,
  Header,
} from "components"
import { color, spacing, palette } from "theme"
import { ViewStyle, StatusBar, Platform, StyleSheet } from "react-native"
import InfoPaymentCard from "screens/pay-internet/pay-internet/info-payment-card"
import { navigateService } from "utils"
import { ListGameCard } from "./component"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5],
}

export class BuyGameCardScreen extends Component {
  goToConfirmTransaction = () => {
    navigateService.navigate("confrimTransactionPayInternet")
  }
  render() {
    return (
      <View full>
        <Header headerTx="buyGameCardTitle" leftIcon="back" />
        <ListGameCard />
      </View>
    )
  }
}

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56

export default BuyGameCardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: "#79B45D",
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B",
  },
})
