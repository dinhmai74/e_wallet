import React, { Component } from "react"
import { View, ViewStyle, StyleSheet } from "react-native"
import { Text, Button } from "components"
import { palette, spacing } from "theme"
import ItemBank from "screens/confirm-cash-in/item-bank"

interface Props {
  style?: ViewStyle
}

export class InputBank extends Component<Props> {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.wraper}>
          <View style={styles.styleIndicator}></View>
          <Text tx="choseInput" style={styles.title} />
          <View style={styles.styleIndicator}></View>
        </View>

        <ItemBank icon="iconBank" nameBank="acb" numberTalent="talentNumber" />
        <ItemBank icon="iconBank" nameBank="acb" numberTalent="talentNumber" />
        <ItemBank icon="iconBank" nameBank="acb" numberTalent="talentNumber" />
        <View style={{ paddingTop: spacing[7] }}>
          <Button
            bordered
            onPress={() => {}}
            style={{ marginHorizontal: spacing[6] }}
            tx="confirm"
            transparent
          />
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
    paddingLeft: spacing[1],
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
