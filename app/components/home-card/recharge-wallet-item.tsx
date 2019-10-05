import React, { Component } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import Item from "./item"

export class RechargeWalletItem extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Item icon="rechargeWallet" tx="home_card_recharge_wallet" onPress={() => {}} />
      </TouchableOpacity>
    )
  }
}

export default RechargeWalletItem
