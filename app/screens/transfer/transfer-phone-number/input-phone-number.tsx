import React, { Component } from "react"
import { View } from "react-native"
import CustomInput from "screens/transfer/custom-input"
import AppButton from "components/app-button/app-button"
import { spacing } from "theme"

export class InputPhoneNumber extends Component {
  render() {
    return (
      <View style={{ paddingTop: spacing[5] }}>
        <CustomInput placeholder="Phone Number" />
        <AppButton onPress={() => {}} style={{ marginTop: spacing[4] }} />
      </View>
    )
  }
}

export default InputPhoneNumber
