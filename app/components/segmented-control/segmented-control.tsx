import React, { Component } from "react"
import { Text, View, FlatList, ScrollView, Alert } from "react-native"
import Item from "./item"
import { ItemHomeCard } from "components/item-home-card"
import { Card } from "native-base"
import MobileCard from "./mobile-card"

export class SegmentedControl extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  renderMobileCard = () => {}
  render() {
    return (
      <View>
        <ScrollView horizontal>
          <Item tx="mobile_card" onPress={this.renderMobileCard} />
          <Item tx="payment" onPress={() => {}} />
          <Item tx="entertainment" onPress={() => {}} />
          <Item tx="mobile_card" onPress={() => {}} />
        </ScrollView>
      </View>
    )
  }
}

export default SegmentedControl
