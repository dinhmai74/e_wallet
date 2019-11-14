import React, { Component } from "react"
import { ItemHomeCard } from "components/item-home-card"
import { SizedBox } from "components"
import _ from "lodash"
import { HomeFunctionItemModel } from "models/home-function-item.model"
import * as Animatable from "react-native-animatable"

interface Props {
  data: HomeFunctionItemModel[]
  onSwipe: (index: number) => void
}

export class SegmentedControlListItem extends Component<Props> {
  render() {
    const { data } = this.props
    return (
      <>
        {_.map(data, (item: HomeFunctionItemModel) => {
          const { icon, callBack, title, id, color } = item

          return (
            <Animatable.View animation={"fadeIn"} key={id}>
              <ItemHomeCard icon={icon} onPress={callBack} tx={title} dividerColor={color} />
              <SizedBox h={3} />
            </Animatable.View>
          )
        })}
      </>
    )
  }
}

export default SegmentedControlListItem
