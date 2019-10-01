import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"
import ItemSelection from "./item-selection"
import { Card } from "native-base"
import { spacing } from "theme"

export class AllItem extends Component {
  render() {
    return (
      <Card style={styles.container} transparent>
        <ItemSelection icon="iconLock" title="security" />
        <ItemSelection icon="iconProfile" title="profile" />
        <ItemSelection icon="iconPrivacy" title="privacy" />
        <ItemSelection icon="iconAbout" title="about" />
        <ItemSelection icon="iconLanguage" title="language" />
        <ItemSelection icon="iconDisplay" title="display" />
        <ItemSelection icon="iconSharing" title="sharing" />
        <ItemSelection icon="iconTheme" title="theme" />
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
    flexWrap: "wrap",
    paddingLeft: spacing[3],
  },
})

export default AllItem
