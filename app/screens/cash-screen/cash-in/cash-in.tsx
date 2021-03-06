import React, { Component } from "react"
import { StyleSheet, ViewStyle } from "react-native"
import Amount from "screens/cash-screen/cash-in/amount"
import ItemMoney from "screens/cash-screen/cash-in/item-money"
import { palette, spacing } from "theme"
import { Button, View, Screen, SizedBox } from "components"
import { formatMoney, navigateService } from "utils"
import produce from "immer"
import { Footer } from "native-base"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[6],
}

const data = [[10000, 20000], [50000, 100000], [200000, 500000]]

export class CashIn extends Component {
  state = {
    selected: -1,
  }

  gotoConfirmCashIn = () => {
    navigateService.navigate("confirmCashIn")
  }

  handlePress = val => {
    this.setState({
      selected: val,
    })
  }

  renderRow = (dat, i) => {
    const { selected } = this.state
    return (
      <View
        key={i}
        style={{
          flex: 1,
          alignSelf: "stretch",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {dat.map((val, index) => {
          return (
            <Button
              key={index}
              text={formatMoney(val, 0)}
              bordered={selected != val}
              transparent={selected != val}
              onPress={this.handlePress.bind(this, val)}
              style={[styles.styleButton, styles.marginButton]}
            />
          )
        })}
      </View>
    )
  }

  render() {
    return (
      <View full>
        <Screen style={ROOT}>
          <SizedBox h={5} />
          <Amount />
          <View style={styles.wraper}>
            {data.map((datum, i) => {
              // This will render a row for each data element.
              return this.renderRow(datum, i)
            })}
          </View>
          <Button
            onPress={this.gotoConfirmCashIn}
            tx="confirm"
            full
            transparent
            bordered
            style={styles.bottom}
          />
        </Screen>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wraper: {
    justifyContent: "center",
  },
  styleButton: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    marginHorizontal: spacing[6],
    marginBottom: spacing[6],
  },
  marginButton: {
    marginTop: spacing[6],
  },
})


export default CashIn

