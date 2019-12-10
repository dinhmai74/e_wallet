import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { spacing, palette } from "theme"
import { Button, Text, RecentPhoneNumber } from "components"
import CustomInput from "../custom-input"
import Indicator from "screens/pay-internet/confirm-transaction/indicator"

export class InputPhoneNumber extends Component {
  render() {
    return (
      <View style={{ paddingTop: spacing[5] }}>
        <CustomInput placeholder="Phone Number*" />
        <CustomInput placeholder="Amount*" />
        <CustomInput placeholder="Transaction description" />
        <Text tx="noteTransfer" t1 style={styles.styleNote} />
        <Indicator title="recent" style={{ width: 125 }} />
        <RecentPhoneNumber phoneNumber="0769 423 567" />
        <RecentPhoneNumber phoneNumber="01269 423 567" />
        <View style={{paddingTop: 160}}>
          <Button bordered preset="primary" onPress={() => {}} tx="tab_transfer" full />
        </View>
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
    paddingBottom: spacing[6],
    paddingTop: spacing[4],
    paddingLeft: spacing[2],
  },
})
export default InputPhoneNumber
