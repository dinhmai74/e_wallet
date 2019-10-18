import React, { Component } from "react"

import Item from "./item"
import { TouchableOpacity } from "react-native"
import { navigateService } from "utils"

export class ScanItem extends Component {
  goScanScreen = () => {
    navigateService.navigate("scanScreen")
  }
  render() {
    return (
      <TouchableOpacity onPress={this.goScanScreen}>
        <Item icon="scan" tx="home_card_scan" onPress={() => {}} />
      </TouchableOpacity>
    )
  }
}

export default ScanItem
