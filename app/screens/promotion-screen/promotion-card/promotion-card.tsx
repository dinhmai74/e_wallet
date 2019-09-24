import React, { Component } from "react"
import { CardItem } from "native-base"
import { Image, StyleSheet } from "react-native"
import { spacing, metrics } from "theme"
import { icons, Icon } from "components"

export class PromotionCard extends Component {
  render() {
    return (
      <CardItem style={{ justifyContent: "center", }} >
        <Image source={icons.promotionImage} style={styles.styleImaged} />
      </CardItem>
    )
  }
}

export default PromotionCard

const styles = StyleSheet.create({
  styleImaged: {
    height: metrics.images.advertiseHeight,
    width: metrics.images.advertiseWidth,
    borderRadius: 8,
  }
})