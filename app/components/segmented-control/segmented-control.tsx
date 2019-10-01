import React, { Component } from "react"
import { View, FlatList, ScrollView, Alert } from "react-native"
import Item from "./item"
import { ItemHomeCard } from "components/item-home-card"
import { Card } from "native-base"
import MobileCard from "./mobile-card"
import { Button } from "components/button"
import { Text } from "components/text"
import { color, spacing } from "theme"

interface Props {}
interface State {
  showItem: boolean
}

export class SegmentedControl extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      showItem: false,
    }
  }
  renderMobileCard = () => {
    this.setState({
      showItem: true,
    })
    if (this.state.showItem) {
      return (
        <Card>
          <ItemHomeCard icon="rechargeMobile" tx="reCharge_mobile" onPress={() => {}} />
          <ItemHomeCard icon="rechargeMobile" tx="reCharge_mobile" onPress={() => {}} />
        </Card>
      )
    }
    console.log("dasd", this.state.showItem)
  }
  render() {
    return (
      <View>
        <ScrollView horizontal>
          <Item tx="mobile_card" onPress={this.renderMobileCard} />
          <Item tx="payment" onPress={this.renderMobileCard} />
          <Item tx="entertainment" onPress={() => {}} />
          <Item tx="mobile_card" onPress={() => {}} />
        </ScrollView>
        <ItemHomeCard icon="rechargeMobile" tx="reCharge_mobile" onPress={() => {}} />
        <ItemHomeCard icon="rechargeMobile" tx="reCharge_mobile" onPress={() => {}} />
        <ItemHomeCard icon="rechargeMobile" tx="reCharge_mobile" onPress={() => {}} />
        <Button
          transparent
          style={{ justifyContent: "flex-end", flex: 1, paddingRight: spacing[2] }}
        >
          <Text tx="seeAll" color={color.textDescription} />
        </Button>
      </View>
    )
  }
}

export default SegmentedControl
