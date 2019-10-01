import React, { Component } from "react"
import { Text, View } from "react-native"
import Item from "./item"

export class RechargeWalletItem extends Component {
  render() {
    return <Item icon="rechargeWallet" tx="home_card_recharge_wallet" onPress={() => {}} />
  }
}

export default RechargeWalletItem
