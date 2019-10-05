import React, { Component } from "react"

import Item from "./item"
import { TouchableOpacity } from "react-native"

export class ScanItem extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Item icon="scan" tx="home_card_scan" onPress={() => {}} />
      </TouchableOpacity>
    )
  }
}

export default ScanItem
