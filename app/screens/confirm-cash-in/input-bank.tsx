import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Text, Button } from "components"
import { palette, spacing } from "theme"
import ItemBank from "screens/confirm-cash-in/item-bank"
import AppButton from "components/app-button/app-button"

export class InputBank extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wraper}>
          <View style={styles.styleIndicator}></View>
          <Text tx="choseInput" style={styles.title} />
          <View style={styles.styleIndicator}></View>
        </View>

        <ItemBank icon="iconBank" nameBank="acb" numberTalent="talentNumber" />
        <ItemBank icon="iconBank" nameBank="acb" numberTalent="talentNumber" />
        <ItemBank icon="iconBank" nameBank="acb" numberTalent="talentNumber" />
        <View style={{ paddingTop: spacing[7] }}>
          <AppButton onPress={() => {}} style={{ marginHorizontal: spacing[6] }} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: spacing[6],
  },
  wraper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: spacing[2],
    paddingBottom: spacing[4],
  },
  title: {
    paddingRight: spacing[2],
    color: palette.blueGrey,
  },
  styleIndicator: {
    backgroundColor: palette.blueGrey,
    width: 65,
    height: 1,
    marginRight: spacing[2],
  },
  styleButton: {
    borderRadius: 8,
    borderColor: palette.warmPink,
    borderWidth: 1,
    marginHorizontal: spacing[6],
    marginBottom: spacing[6],
  },
  styleText: {
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
  },
})

export default InputBank
