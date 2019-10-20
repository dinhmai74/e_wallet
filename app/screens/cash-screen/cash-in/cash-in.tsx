import React, { Component } from "react"
import { StyleSheet, ViewStyle } from "react-native"
import Amount from "screens/cash-screen/cash-in/amount"
import ItemMoney from "screens/cash-screen/cash-in/item-money"
import { palette, spacing } from "theme"
import { Button, View, Screen } from "components"
import { navigateService } from "utils"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5],
}
export class CashIn extends Component {
  gotoConfirmCashIn = () => {
    navigateService.navigate("confirmCashIn")
  }
  render() {
    return (
      <View full>
        <Screen style={ROOT} preset="scroll">
          <Amount />
          <View style={styles.wraper}>
            <ItemMoney title="tenThousand" />
            <ItemMoney title="twentyThousand" />
            <ItemMoney title="fiftyThousand" />
            <ItemMoney title="oneHundredMillion" />
            <ItemMoney title="twoHundredMillion" />
            <ItemMoney title="fiveHundredMillion" />
          </View>
          <Button
            onPress={this.gotoConfirmCashIn}
            style={{ marginHorizontal: spacing[6] }}
            tx="confirm"
            transparent
            bordered
          />
        </Screen>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wraper: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    paddingBottom: spacing[7],
    paddingLeft: spacing[1],
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

export default CashIn
