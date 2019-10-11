import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Item, Input } from "native-base"
import { palette, spacing } from "theme"
import CustomInput from "screens/transfer/custom-input"
import { Text } from "components"
import AppButton from "components/app-button/app-button"

export class TextField extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomInput placeholder="ATM Account Number*" />
        <CustomInput placeholder="Amount*" />
        <CustomInput placeholder="Transaction Description" />
        <Text tx="noteTransfer" p3 style={styles.styleNote} />
        <AppButton onPress={() => {}} style={{ flex: 1 }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing[3],
    flex: 1,
  },
  styleNote: {
    color: palette.blueGrey,
    paddingBottom: spacing[4],
  },
})
export default TextField
