import React, { Component } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import Item from "./item"
import { navigateService } from "utils"

export class RechargeWalletItem extends Component {
  goTrainTicketScreen = () => {
    navigateService.navigate("payInternet")
  }
  render() {
    return (
      <TouchableOpacity onPress={this.goTrainTicketScreen}>
        <Item icon="rechargeWallet" tx="home_card_recharge_wallet" onPress={() => {}} />
      </TouchableOpacity>
    )
  }
}

export default RechargeWalletItem
