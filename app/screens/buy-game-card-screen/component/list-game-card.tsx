import React, { Component } from "react"
import { View, Image, ImageSourcePropType, StyleSheet } from "react-native"
import { CardItem, Card } from "native-base"
import { Text } from "components/text"
import { Icon, IconTypes, icons } from "components/icon"
import { spacing, metrics } from "theme"
import { TranslateKey } from "i18n/lang"
import { Button, ItemGameCardProps, ItemGameCard } from "components"
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import _ from "lodash"

export const ListGameCardData: ItemGameCardProps[] = [
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.beef },
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.beef },
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.beef },
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.beef },
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.beef },
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.beef },
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.beef },
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.beef },
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.beef },
]

export class ListGameCard extends Component {
  renderItem = () => {
    return _.map(ListGameCardData, (gameCard: ItemGameCardProps, idx) => {
      return (
        <ItemGameCard
          key={idx}
          title={gameCard.title}
          subTitle={gameCard.subTitle}
          imageUrl={gameCard.imageUrl}
        />
      )
    })
  }

  render() {
    return <ScrollView>{this.renderItem()}</ScrollView>
  }
}

export default ListGameCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: 'red'
  },
  styleImage: {
    width: 60,
    height: 50,
    borderRadius: 5,
  },
  wrapper: {
    justifyContent: "center",
    paddingLeft: spacing[3],
    paddingTop: spacing[1],
  },
  title: {
    fontWeight: "bold",
    paddingBottom: spacing[2],
  },
  subTitle: {
    color: "#656565",
    paddingBottom: spacing[2],
  },
  styleButton: {
    paddingLeft: 50,
    justifyContent: "flex-end",
    flex: 1,
    paddingTop: 15,
    // backgroundColor: 'red'
  },
})
