import React, { Component } from "react"
import { View, Image, ImageSourcePropType, StyleSheet } from "react-native"
import { CardItem, Card } from "native-base"
import { Text } from "components/text"
import { Icon, IconTypes, icons } from "components/icon"
import { spacing, metrics, palette } from "theme"
import { TranslateKey } from "i18n/lang"
import { Button } from "components"
import { UnderlineText } from "components/underline-text"

export interface ItemGameCardProps {
  title: TranslateKey
  subTitle: TranslateKey
  imageUrl: ImageSourcePropType
}

export class ItemGameCard extends Component<ItemGameCardProps> {
  render() {
    const { title, subTitle, imageUrl, ...rest } = this.props
    return (
      <CardItem style={styles.container}>
        <Button transparent>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.styleImage} source={imageUrl} />
            <View style={styles.wrapper}>
              <Text tx={title} style={styles.title} t1 bold color={palette.navy} />
              <Text tx={subTitle} style={styles.subTitle} b2 color={palette.blueGrey} />
            </View>
            <Button style={styles.styleButton} transparent>
              <Icon icon="iconFoward" size={metrics.icon.small} />
            </Button>
          </View>
        </Button>
        <View
          style={{
            backgroundColor: palette.blueGrey,
            flex: 1,
            width: 300,
            height: 1,
            marginLeft: 120,
          }}
        ></View>
      </CardItem>
    )
  }
}

export default ItemGameCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // justifyContent: "space-around",
    // backgroundColor: 'red'
  },
  styleImage: {
    width: 50,
    height: 60,
    borderRadius: 5,
  },
  wrapper: {
    justifyContent: "center",
    paddingLeft: spacing[1],
    paddingTop: spacing[1],
  },
  title: {
    paddingBottom: spacing[1],
  },
  subTitle: {
    paddingBottom: spacing[4],
  },
  styleButton: {
    paddingLeft: 80,
    justifyContent: "flex-end",
    flex: 1,
    paddingTop: 10,
  },
})
