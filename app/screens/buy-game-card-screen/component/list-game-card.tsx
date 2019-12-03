import React, { Component } from "react"
import { View, Image, ImageSourcePropType, StyleSheet } from "react-native"
import { CardItem, Card } from "native-base"
import { Text } from "components/text"
import { Icon, IconTypes, icons } from "components/icon"
import { spacing, metrics } from "theme"
import { TranslateKey } from "i18n/lang"
import { Button, ItemGameCardProps, ItemGameCard } from "components"
import { FlatList } from "react-native-gesture-handler"

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
    return (
      <ItemGameCard
        title={ListGameCardData[0].title}
        subTitle={ListGameCardData[0].subTitle}
        imageUrl={ListGameCardData[0].imageUrl}
      />
    )
  }
  render() {
    return (
      <FlatList
        data={ListGameCardData}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ paddingHorizontal: spacing[4] }}
      />
    )
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
