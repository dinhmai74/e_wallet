import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import Amount from "screens/cash-screen/cash-in/amount"
import ItemMoney from "screens/cash-screen/cash-in/item-money"
import { Card } from "native-base"
import { Button, Text } from "components"
import { palette, spacing } from "theme"

export class CashIn extends Component {
  render() {
    return (
      <View>
        <Amount />
        <View style={styles.wraper}>
          <ItemMoney title="tenThousand" />
          <ItemMoney title="twentyThousand" />
          <ItemMoney title="fiftyThousand" />
          <ItemMoney title="oneHundredMillion" />
          <ItemMoney title="twoHundredMillion" />
          <ItemMoney title="fiveHundredMillion" />
        </View>
        <View style={{ paddingTop: spacing[7] }}>
          <Button style={styles.styleButton} transparent>
            <Text tx="confirm" style={styles.styleText} />
          </Button>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wraper: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  styleButton: {
    borderRadius: 8,
    borderColor: palette.warmPink,
    borderWidth: 1,
    width: 343,
    height: 41,
    marginHorizontal: spacing[6],
    marginBottom: spacing[6],
  },
  styleText: {
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
  },
})

export default CashIn
