import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { palette, spacing } from "theme"
import { Text } from "components"
import { TranslateKey } from "i18n/lang"

interface Props {
  title?: TranslateKey
  style?: any
}

export class Indicator extends Component<Props, {}> {
  render() {
    const { title, style } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wraper}>
          <View
            style={[
              style,
              { backgroundColor: palette.blueGrey, marginRight: spacing[2], height: 1 },
            ]}
          ></View>
          <Text tx={title} style={{ paddingRight: spacing[2] }} t1 color={palette.blueGrey} />
          <View style={[style, { backgroundColor: palette.blueGrey, height: 1 }]}></View>
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
