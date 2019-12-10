import React, { Component } from "react"
import { StyleSheet, ViewStyle } from "react-native"
import { palette, spacing } from "theme"
import { Button, View, Screen, SizedBox, Text, icons, Icon } from "components"
import { navigateService } from "utils"
import produce from "immer"
import { Footer, Left, Right } from "native-base"
import Indicator from "screens/pay-internet/confirm-transaction/indicator"


const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  // paddingHorizontal: spacing[6],
}

const data = [[10000, 20000, 50000], [100000, 200000, 500000]]

// @ts-ignore
function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? "-" : ""

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString()
    let j = i.length > 3 ? i.length % 3 : 0

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      // @ts-ignore
      (decimalCount
        ? decimal +
          // @ts-ignore
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    )
  } catch (e) {
    console.log(e)
  }
}

interface Props {
  titlePhoneCard?: string
  titleGameCard?: string
}

export class DenominationCard extends Component<Props, {}> {
  state = {
    selected: -1,
    numberCard: 0,
  }

  gotoConfirmCashIn = () => {
    navigateService.navigate("confirmCashIn")
  }

  handlePress = val => {
    this.setState({
      selected: val,
    })
  }

  incrementCount = () => {
    this.setState({
      numberCard: this.state.numberCard + 1,
    })
  }

  decrementCount = () => {
    if (this.state.numberCard > 0) {
      this.setState({
        numberCard: this.state.numberCard - 1,
      })
    }
  }

  renderAmount = () => {
    return (
      <View style={styles.wrapperAmount}>
        <Left>
          <Text tx="amount" color={palette.blueGrey} b1 />
        </Left>
        <Right style={styles.wrapperNumberCard}>
          <Button onPress={this.decrementCount} transparent style={{ paddingRight: spacing[5] }}>
            <Icon icon="iconDecrement" />
          </Button>
          <Text style={{ paddingRight: spacing[5] }} color={palette.blueGrey} b1>
            {this.state.numberCard}
          </Text>
          <Button transparent onPress={this.incrementCount}>
            <Icon icon="iconIncrement" />
          </Button>
        </Right>
      </View>
    )
  }

  renderTotal = () => {
    const { numberCard, selected } = this.state
    const totalMoney = formatMoney(numberCard * selected, 0)
    return (
      <View style={{ flexDirection: "row", paddingHorizontal: spacing[2], paddingTop: spacing[4] }}>
        <Left>
          <Text tx="total" color={palette.blueGrey} b1 />
        </Left>
        <Right style={{ paddingRight: spacing[6] }}>
          <Text color={palette.blueGrey} b1>
            {totalMoney}đ
          </Text>
        </Right>
      </View>
    )
  }

  renderRow = (dat, i) => {
    const { selected } = this.state
    return (
      <View
        key={i}
        style={{
          flexDirection: "row",
          flex: 1,
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

  goBuyPhoneCardInfoScreen = () => {
    const { numberCard, selected } = this.state
    const totalCost = formatMoney(numberCard * selected, 0)
    const { titleGameCard, titlePhoneCard } = this.props
    if (titlePhoneCard) {
      navigateService.navigate("buyPhoneCardInfoScreen", {
        selected: formatMoney(numberCard, 0),
        totalCost: totalCost,
        numberCard: formatMoney(selected, 0),
        type: "Buy phone card",
      })
    } else if (titleGameCard) {
      navigateService.navigate("buyPhoneCardInfoScreen", {
        selected: formatMoney(numberCard, 0),
        totalCost: totalCost,
        numberCard: formatMoney(selected, 0),
        type: "Buy card garena",
      })
    }
  }
  render() {
    return (
      <View full>
        <Screen style={ROOT}>
          <View style={{ paddingTop: spacing[5] }}>
            <Indicator title="denominations" style={{ width: 85 }} />
          </View>
          <View style={styles.wraper}>
            {data.map((data, i) => {
              // This will render a row for each data element.
              return this.renderRow(data, i)
            })}
          </View>
          <SizedBox h={6} />
          <View
            style={{
              width: 320,
              height: 1,
              backgroundColor: palette.blueGrey,
              marginLeft: spacing[2],
            }}
          ></View>
          {this.renderAmount()}
          {this.renderTotal()}
          <View style={{ paddingTop: spacing[4] }}>
            <Button
              tx="buy"
              full
              bordered
              onPress={this.goBuyPhoneCardInfoScreen}
            />
          </View>
        </Screen>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wraper: {
    // justifyContent: "center",
    paddingBottom: spacing[4],
  },
  styleButton: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  marginButton: {
    marginTop: spacing[6],
  },
  wrapperAmount: {
    flexDirection: "row",
    paddingHorizontal: spacing[2],
    paddingTop: spacing[4],
  },
  wrapperNumberCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
  },
})

export default DenominationCard
