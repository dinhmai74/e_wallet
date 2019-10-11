import React, { Component } from "react"
import { Text, View, Image, StyleSheet } from "react-native"
import { CardItem } from "native-base"
import { icons } from "components"
import { metrics, spacing } from "theme"

export class BankCard extends Component {
  render() {
    return (
      <CardItem style={{ justifyContent: "center" }}>
        <Image source={icons.iconBankCard} style={styles.styleImage} />
      </CardItem>
    )
  }
}

export default BankCard

const styles = StyleSheet.create({
  styleImage: {
    height: metrics.images.bankCardHeight,
    width: metrics.images.bankCardWidth,
    borderRadius: 10,
    marginTop: spacing[4],
  },
})
