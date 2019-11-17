import React, { Component } from "react"
import _ from "lodash"
import { ItemHomeCard } from "components/item-home-card"
import { SizedBox } from "components"
import { HomeFunctionItemModel } from "models/home-function-item.model"
import * as Animatable from "react-native-animatable"
import { navigateService } from "utils"
import { RootRouteName } from "navigation/root-navigator"

interface Props {
  data: HomeFunctionItemModel[]
}

export class SegmentedControlListItem extends Component<Props> {
  onPress = (route: RootRouteName) => {
    navigateService.navigate(route)
  }

  render() {
    const { data } = this.props
    return (
      <>
        {_.map(data, (item: HomeFunctionItemModel) => {
          const { icon, route, title, id, color } = item

          return (
            <Animatable.View animation={"fadeIn"} key={id}>
              <ItemHomeCard
                icon={icon}
                onPress={this.onPress.bind(this, route)}
                tx={title}
                dividerColor={color}
              />
              <SizedBox h={3} />
            </Animatable.View>
          )
        })}
      </>
    )
  }
}

export default SegmentedControlListItem
