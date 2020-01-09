import React, { Component } from "react"
import { StyleSheet, ScrollView } from "react-native"
import { icons } from "components/icon"
import { spacing } from "theme"
import { ItemGameCardProps, ItemGameCard } from "components"
import _ from "lodash"

export const ListGameCardData: ItemGameCardProps[] = [
  { title: "nameCardTest", subTitle: "discount", imageUrl: icons.iconGarena },
  { title: "buyZingCard", subTitle: "discount", imageUrl: icons.iconZing },
  { title: "buyBitCard", subTitle: "discount", imageUrl: icons.iconBit },
  { title: "buyClipCard", subTitle: "discount", imageUrl: icons.iconCliptv },
  { title: "buyGosuCard", subTitle: "discount", imageUrl: icons.iconGosuCard },
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
  },
  styleImage: {
    width: 40,
    height: 30,
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
  },
})
