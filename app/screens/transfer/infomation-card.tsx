import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "components"
import { spacing, palette } from "theme"

export class InfomationCard extends Component {
  render() {
    return (
      <View>
        <View>
          <Text tx="information" s1 bold style={styles.title} />
        </View>
        <View>
          <Text tx="transferToMoney" style={styles.content} bold p3 />
          <Text tx="thisIsFast" style={styles.content} bold p3 />
          <Text tx="onlySupport" style={styles.content} bold p3 />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: spacing[2],
    color: palette.navy,
  },
  content: {
    paddingBottom: spacing[2],
    color: palette.greyishBrown,
  },
})
export default InfomationCard
