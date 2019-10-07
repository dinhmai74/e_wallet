import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Card, CardItem, Item, Label, Input, Content } from "native-base"
import { spacing, palette } from "theme"
import { Text } from "components"

export class DisplayMoney extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <Text tx="titleMoney" style={styles.money} />
        <Text tx="labelCharge" style={styles.charge} s2 />
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // backgroundColor: "red",
    borderColor: "#cccccc",
    width: 349,
    height: 134,
    flex: 1,
    marginHorizontal: spacing[6],
    marginTop: spacing[6],
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  money: {
    color: palette.navy,
    fontSize: 24,
  },
  charge: {
    color: palette.blueGrey,
  },
})
export default DisplayMoney
