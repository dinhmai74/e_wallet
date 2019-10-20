import React, { Component } from "react"
import { View } from "react-native"
import CustomInput from "screens/transfer/custom-input"
import { spacing } from "theme"
import { Button } from "components"

export class InputPhoneNumber extends Component {
  render() {
    return (
      <View style={{ paddingTop: spacing[5] }}>
        <CustomInput placeholder="Phone Number" />
        <Button
          bordered
          preset="primary"
          onPress={() => {}}
          style={{ marginTop: spacing[4] }}
          tx="confirm"
        />
      </View>
    )
  }
}

export default InputPhoneNumber
