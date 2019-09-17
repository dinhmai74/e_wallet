import React, { Component } from "react"
import { Text, View } from "react-native"
import { Card } from "native-base"
import { ItemHomeCard } from "components/item-home-card"

export class MobileCard extends Component {
  render() {
    return (
      <View>
        <Card>
          <ItemHomeCard icon="rechargeMobile" tx="reCharge_mobile" onPress={() => {}} />
        </Card>
        <Card>
          <ItemHomeCard
            icon="buyMobileCard"
            tx="buy_mobile_card"
            onPress={() => {}}
            dividerColor="#009ea6"
          />
        </Card>
        <Card>
          <ItemHomeCard
            icon="buyGameCard"
            tx="buy_game_card"
            onPress={() => {}}
            dividerColor="#000000"
          />
        </Card>
      </View>
    )
  }
}

export default MobileCard
