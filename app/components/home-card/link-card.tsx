import React, { Component } from "react"

import Item from "./item"
import { TouchableOpacity } from "react-native"
import { navigateService } from "utils"
import { NavigationScreenProps } from "react-navigation"

export interface LinkCardScreenProps extends NavigationScreenProps<{}> {}
export class LinkCard extends Component<LinkCardScreenProps, {}> {
  goCashScreen = () => navigateService.navigate("cash")
  render() {
    return (
      <TouchableOpacity onPress={this.goCashScreen}>
        <Item icon="linkCard" tx="home_card_link_card" onPress={() => {}} />
      </TouchableOpacity>
    )
  }
}

export default LinkCard
