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
              s2
            />
            <Text tx="moneyTest" style={{ color: palette.navy }} s2 />
          </CardItem>
        </CardItem>
        <Button
          onPress={() => {}}
          tx="change"
          transparent
          style={styles.styledButton}
          textStyle={{ color: palette.blueGrey, fontSize: 16 }}
        />
      </Card>
    )
  }
}

export default Wallet

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[3],
    shadowColor: palette.shadowBlack,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  styledImage: {
    width: 45,
    height: 45,
  },
  content: {
    flexDirection: "column",
    textAlign: "left",
  },
  styledButton: {
    width: 85,
    height: 30,
    flex: 1,
  },
})
