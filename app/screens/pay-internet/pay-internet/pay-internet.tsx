import React, { Component } from "react"
import { Screen, Text, Button, View } from "components"
import { color, spacing, palette } from "theme"
import { ViewStyle, StatusBar, Platform, StyleSheet } from "react-native"
import InfoPaymentCard from "screens/pay-internet/pay-internet/info-payment-card"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5],
}

// const MyStatusBar = ({ backgroundColor, ...props }) => (
//   <View style={[styles.statusBar, { backgroundColor }]}>
//     <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//   </View>
// )

export class PayInternet extends Component {
  render() {
    return (
      <View full>
        <Screen style={ROOT} backgroundColor={color.transparent} preset="scroll">
          {/* <MyStatusBar backgroundColor="#ECE9E9" barStyle="light-content" /> */}
          <Text preset="header" tx="internetBillPayment" />
          <InfoPaymentCard />
          <View style={{ paddingTop: 300 }}>
            <Button
              bordered
              onPress={() => {}}
              style={{ marginHorizontal: spacing[3], backgroundColor: palette.warmPink }}
            >
              <Text tx="confirm" style={{ color: palette.white }} />
            </Button>
          </View>
        </Screen>
      </View>
    )
  }
}

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56

export default PayInternet

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
