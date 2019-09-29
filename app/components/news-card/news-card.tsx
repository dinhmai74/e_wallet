import React, { Component } from "react"
import { View, Image, ImageSourcePropType } from "react-native"
import { CardItem, Left, Body, Thumbnail, Right } from "native-base"
import { Text } from "components/text"
import { Icon, IconTypes } from "components/icon"
import { spacing, metrics } from "theme"
import { TranslateKey } from "i18n/lang"

interface Props {
  title?: TranslateKey
  subTitle?: TranslateKey
  number?: TranslateKey
  time?: TranslateKey
  icon?: IconTypes
  imageUrl?: ImageSourcePropType
  style?:string
}

export class NewsCard extends Component<Props> {
  render() {
    const { title, subTitle, number, time, icon, imageUrl, style, ...rest } = this.props
    return (
      <CardItem style={style} {...rest}  >
        <View style={{ flexDirection: "row" }}>
          <Image style={{ width: 100, height: 80, borderRadius: 10 }} source={imageUrl} />
          <View style={{ paddingLeft: spacing[5] }}>
            <Text tx={title} style={{ fontWeight: "bold", paddingBottom: spacing[2] }} />
            <Text tx={subTitle} style={{ color: "#656565", paddingBottom: spacing[2] }} p4 />
            <View style={{ flexDirection: "row" }}>
              <Icon
                icon={icon}
                style={{ marginRight: 10 }}
                color="#959595"
                size={metrics.icon.small}
              />
              <Text tx={number} style={{ paddingRight: spacing[1], color: "#e05a67" }} p3 />
              <Text tx={time} style={{ color: "#696969" }} p4 />
            </View>
          </View>
        </View>
      </CardItem>
    )
  }
}

export default NewsCard
