import React, { Component } from "react"
import { StyleSheet, ViewStyle } from "react-native"
import { Card } from "native-base"
import { spacing, palette } from "theme"
import { Text } from "components"

interface Props {
  style?: ViewStyle
}

export class DisplayMoney extends Component<Props> {
  render() {
    return (
      <Card style={[styles.container, this.props.style]}>
        <Text tx="titleMoney" style={styles.money} />
        <Text tx="labelCharge" style={styles.charge} b1 />
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
    marginHorizontal: spacing[4],
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
