import React, { Component } from "react"
import { View, Image, StyleSheet } from "react-native"
import { Text } from "components/text"
import { Icon } from "components/icon"
import { IconType } from "react-native-elements"
import { TranslateKey } from "i18n/lang"
import { spacing, metrics } from "theme"
import { Left, Right } from "native-base"

interface Props {
  icon: IconType
  content: TranslateKey
}

export class ItemPopup extends Component<Props, {}> {
  render() {
    const { icon, content } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wraper}>
          <Icon icon={icon} style={{ marginRight: spacing[2] }} size={metrics.icon.normal} />
          <Text tx={content} p2 bold />
        </View>
        <View style={{ paddingRight: spacing[4] }}>
          <Icon icon="iconFoward" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: spacing[4],
    paddingLeft: spacing[2],
    justifyContent: "space-between",
  },
  wraper: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: spacing[4],
  },
})

export default ItemPopup
