import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Card } from "native-base"
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
    width: 310,
    height: 134,
    flex: 1,
    marginHorizontal: spacing[5],
    marginTop: spacing[6],
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  money: {
    color: palette.navy,
    fontSize: 24,
    paddingBottom: spacing[2],
  },
  charge: {
    color: palette.blueGrey,
  },
})
export default DisplayMoney
