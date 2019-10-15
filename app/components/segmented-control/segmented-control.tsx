import React, { Component } from "react"
import { View, ScrollView } from "react-native"
import Item from "./item"
import { Button } from "components/button"
import { Text } from "components/text"
import { color, spacing } from "theme"
import SegmentedControlListItem from "components/segmented-control/segmented-control-list-item"
import { HomeFunctionItemModel } from "models/home-function-item.model"

import _ from "lodash"

interface Props {}

interface State {
  data: HomeFunctionItemModel[]
  selectedIndex: number
}

export class SegmentedControl extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      data: this.itemData[0],
    }
  }

  itemData: Array<HomeFunctionItemModel[]> = [
    [
      {
        id: 0,
        title: "reCharge_mobile",
        icon: "rechargeMobile",
        callBack: () => {},
        color: "#EC7836",
      },
      {
        id: 1,
        title: "reCharge_mobile",
        icon: "rechargeMobile",
        color: "#009ea6",
        callBack: () => {},
      },
    ],
    [
      {
        id: 2,
        title: "reCharge_mobile",
        icon: "rechargeMobile",
        color: "#000000",
        callBack: () => {},
      },
    ],
    [
      {
        id: 3,
        title: "reCharge_mobile",
        icon: "rechargeMobile",
        color: "#000000",
        callBack: () => {},
      },
    ],
  ]

  onChangeCategory = (index: number) => {
    this.setState({
      data: this.itemData[index],
      selectedIndex: index,
    })
  }

  titleData: any = [
    {
      id: 0,
      tx: "mobile_card",
      onPress: () => {
        this.onChangeCategory(0)
      },
    },
    {
      id: 1,
      tx: "payment",
      onPress: () => {
        this.onChangeCategory(1)
      },
    },
    {
      id: 2,
      tx: "entertainment",
      onPress: () => {
        this.onChangeCategory(2)
      },
    },
    {
      id: 3,
      tx: "mobile_card",
      onPress: () => {
        this.onChangeCategory(3)
      },
    },
  ]

  render() {
    const { data, selectedIndex } = this.state
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {_.map(this.titleData, item => {
            const { tx, onPress, id } = item
            return <Item tx={tx} onPress={onPress} isRead={id === selectedIndex} key={id} />
          })}
        </ScrollView>

        <SegmentedControlListItem data={data} onSwipe={index => {}} />

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
