import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Text } from "../text"
import { color, spacing } from "theme"
import { TranslateKey } from "i18n/lang"
import { Button } from "components/button"

interface Props {
  tx: TranslateKey
  onPress: () => void
  isRead?: boolean
}
export class Item extends Component<Props> {
  render() {
    const { tx, onPress, isRead } = this.props
    const colors = isRead ? color.textNavy : color.textGrey
    return (
      <Button transparent onPress={onPress}>
        <Text tx={tx} style={[styles.styledText, { color: colors }]} p4 />
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
