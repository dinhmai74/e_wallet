import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Icon, Text, IconTypes } from "components"
import { CardItem } from "native-base"
import { spacing } from "theme"
import { TranslateKey } from "i18n/lang"

interface Props {
  icon?: IconTypes
  title?: TranslateKey
}

export class ItemSelection extends Component<Props> {
  render() {
    const { icon, title } = this.props
    return (
      <CardItem style={styles.wrapper}>
        <Icon icon={icon} style={styles.styleIcon} />
        <Text tx={title} b2 style={styles.styleText} />
      </CardItem>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: spacing[5],
    width: 100,
    height: 100,
  },
  container: {},
  styleText: {
    paddingTop: spacing[3],
    textAlign: "center",
    width: 100,
  },
  styleIcon: {
    paddingBottom: spacing[4],
    paddingTop: spacing[2],
  },
})
export default ItemSelection
