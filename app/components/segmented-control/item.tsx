import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "../text"
import { metrics, spacing } from "theme"
import { TranslateKey } from "i18n/lang"
import { Button } from "components/button"

interface Props {
  tx: TranslateKey
  onPress: () => void
  isRead?: boolean
}
export class Item extends Component<Props> {
  render() {
    const bg = isRead ? "#001433" : "#959595"
    const { tx, onPress, isRead } = this.props
    return (
      <Button transparent onPress={onPress}>
        <Text tx={tx} style={[styles.styledText]} p4 />
      </Button>
    )
  }
}

export default Item

const styles = StyleSheet.create({
  styledText: {
    textAlign: "center",
    paddingLeft: spacing[2],
    fontWeight: "bold",
    color: "#959595",
  },
})
