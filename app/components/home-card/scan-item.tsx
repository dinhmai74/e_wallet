import React, { Component } from "react"

import Item from "./item"

export class ScanItem extends Component {
  render() {
    return (
      <Item icon="scan" tx="home_card_scan" onPress={()=>{}} />
    )
  }
}

export default ScanItem
