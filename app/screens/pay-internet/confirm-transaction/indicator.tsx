import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { palette, spacing } from "theme"
import { Text } from "components"
import { TranslateKey } from "i18n/lang"

interface Props {
  title?: TranslateKey
}

export class Indicator extends Component<Props, {}> {
  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wraper}>
          <View style={styles.styleIndicator}></View>
          <Text tx={title} style={styles.title} />
          <View style={styles.styleIndicator}></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing[6],
  },
  wraper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: spacing[1],
    paddingBottom: spacing[4],
  },
  title: {
    paddingRight: spacing[2],
    color: palette.blueGrey,
  },
  styleIndicator: {
    backgroundColor: palette.blueGrey,
    width: 120,
    height: 1,
    marginRight: spacing[2],
  },
})
export default Indicator
