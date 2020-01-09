import React, { Component } from "react"
import { Screen, View, Header, SizedBox } from "components"
import { spacing } from "theme"
import { ViewStyle, StyleSheet } from "react-native"
import { ListGameCard } from "./component"
import PromotionSearch from "screens/promotion-screen/promotion-search/promotion-search"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[3],
}

export class BuyGameCardScreen extends Component {
  render() {
    return (
      <View full>
        <Header headerTx="buyGameCardTitle" leftIcon="back" />
        <Screen style={ROOT}>
          <SizedBox h={5} />
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
