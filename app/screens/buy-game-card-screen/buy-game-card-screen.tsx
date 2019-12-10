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
  SizedBox,
} from "components"
import { color, spacing, palette } from "theme"
import { ViewStyle, StatusBar, Platform, StyleSheet } from "react-native"
import InfoPaymentCard from "screens/pay-internet/pay-internet/info-payment-card"
import { navigateService } from "utils"
import { ListGameCard } from "./component"
import PromotionSearch from "screens/promotion-screen/promotion-search/promotion-search"

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
        <Screen>
          <SizedBox h={5}/>
          <PromotionSearch />
          <ListGameCard />
        </Screen>
      </View>
    )
  }
}

export default BuyGameCardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B",
  },
})
