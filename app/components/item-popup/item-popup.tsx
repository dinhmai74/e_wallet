import React, { Component } from "react"
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "components/text"
import { Icon, IconTypes } from "components/icon"
import { TranslateKey } from "i18n/lang"
import { spacing, metrics } from "theme"

interface Props {
  icon: IconTypes
  content: TranslateKey
  onPress: () => void
}

export class ItemPopup extends Component<Props, {}> {
  render() {
    const { icon, content, onPress } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wraper}>
          <Icon icon={icon} style={{ marginRight: spacing[2] }} size={metrics.icon.normal} />
          <Text tx={content} p2 bold />
        </View>
        <TouchableOpacity style={{ paddingRight: spacing[2] }} onPress={onPress}>
          <Icon icon="iconFoward" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: spacing[5],
    paddingLeft: spacing[2],
    justifyContent: "space-between",
  },
  wraper: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: spacing[2],
  },
})

export default ItemPopup
