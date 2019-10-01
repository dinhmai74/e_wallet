import React, { Component } from "react"
import { Icon, Text, Button, View, IconTypes } from "components"
import { spacing, Fonts, metrics, color } from "theme"
import { StyleSheet } from "react-native"
import { TranslateKey } from "i18n/lang"

interface Props {
  label?: TranslateKey
  onPress: () => void
  viewMore?: TranslateKey
  icon?: IconTypes
}

export class ItemPromotion extends Component<Props> {
  render() {
    const { label, onPress, viewMore, icon, ...rest } = this.props
    return (
      <View style={{ flexDirection: "row", ...rest }}>
        <Text tx={label} style={styles.title} p2 />
        <View style={styles.wrapper}>
          <Button transparent onPress={onPress}>
            <Text
              tx={viewMore}
              preset="fieldLabel"
              bold
              size={Fonts.size.p2}
              style={{ paddingRight: spacing[1], color: color.textNavy }}
            />
            <Icon icon={icon} size={metrics.icon.tiny} containerStyle={{ padding: spacing[0] }} />
          </Button>
        </View>
      </View>
    )
  }
}

export default ItemPromotion

const styles = StyleSheet.create({
  title: {
    paddingLeft: spacing[4],
    paddingTop: spacing[3],
    fontWeight: "bold",
    color: "#353535",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    paddingRight: spacing[2],
  },
})
