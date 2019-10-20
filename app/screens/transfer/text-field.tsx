import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { palette, spacing } from "theme"
import CustomInput from "screens/transfer/custom-input"
import { Text, Button } from "components"

export class TextField extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomInput placeholder="ATM Account Number*" />
        <CustomInput placeholder="Amount*" />
        <CustomInput placeholder="Transaction Description" />
        <Text tx="noteTransfer" p3 style={styles.styleNote} />
        <Button bordered onPress={() => {}} style={{ flex: 1 }} tx="confirm" />
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
