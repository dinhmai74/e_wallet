import React, { Component } from "react"
import { View, Image, ImageSourcePropType, StyleSheet } from "react-native"
import { CardItem, Card } from "native-base"
import { Text } from "components/text"
import { Icon, IconTypes, icons } from "components/icon"
import { spacing, metrics, palette } from "theme"
import { TranslateKey } from "i18n/lang"
import { Button } from "components"
import { UnderlineText } from "components/underline-text"
import { Touch } from "react-powerplug"
import { TouchableOpacity } from "react-native-gesture-handler"
import { navigateService } from "utils"

export interface ItemGameCardProps {
  title: TranslateKey
  subTitle: TranslateKey
  imageUrl: ImageSourcePropType
}

export class ItemGameCard extends Component<ItemGameCardProps> {
  goSelectGameCardScreen = () => {
    navigateService.navigate("selectGameCardScreen")
  }
  render() {
    const { title, subTitle, imageUrl, ...rest } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goSelectGameCardScreen}>
          <View style={{ flexDirection: "row", paddingHorizontal: spacing[5] }}>
            <Image style={styles.styleImage} source={imageUrl} />
            <View style={styles.wrapperContent}>
              <Text tx={title} style={styles.title} t1 bold color={palette.navy} />
              <Text tx={subTitle} style={styles.subTitle} b2 color={palette.blueGrey} />
            </View>
            <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
              <Icon icon="iconFoward" size={metrics.icon.small} color={palette.blueGrey} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: palette.blueGrey,
              flex: 1,
              width: 305,
              height: 1,
              marginLeft: 25,
              marginBottom: spacing[3],
            }}
          ></View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ItemGameCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingBottom: spacing[3],
  },
  styleImage: {
    width: 50,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 3
  },
  wrapperContent: {
    justifyContent: "center",
    paddingLeft: spacing[5],
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
