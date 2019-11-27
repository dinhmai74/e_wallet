import React, { Component } from "react"
import { View, Image, StyleSheet } from "react-native"
import { Card, CardItem, Left } from "native-base"
import { icons, Text, Button } from "components"
import { spacing, palette } from "theme"

export class Wallet extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <CardItem style={{}}>
          <Image source={icons.iconWalletTransaction} style={styles.styledImage} />
          <CardItem style={styles.content}>
            <Text
              tx="testWallet"
              style={{ color: palette.blueGrey, paddingBottom: spacing[2] }}
              b1
            />
            <Text tx="moneyTest" style={{ color: palette.navy }} b1 />
          </CardItem>
        </CardItem>
        <View style={{ justifyContent: "center" }}>
          <Button
            onPress={() => {}}
            transparent
            tx="change"
            style={styles.styledButton}
            textStyle={{ color: palette.blueGrey, fontSize: 16 }}
          />
        </View>
      </Card>
    )
  }
}

export default Wallet

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: spacing[3],
  },
  styledImage: {
    width: 45,
    height: 45,
  },
  content: {
    flexDirection: "column",
    textAlign: "left",
  },
  styledButton: {},
})
