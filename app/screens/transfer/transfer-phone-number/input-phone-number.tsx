import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { spacing, palette } from "theme"
import { Button, Text, RecentPhoneNumber, SizedBox } from "components"
import CustomInput from "../custom-input"
import Indicator from "screens/pay-internet/confirm-transaction/indicator"
import { Item, Input, Label, Form } from "native-base"
import { navigateService } from "utils"
import { translate } from "i18n"

interface State {
  phoneNumber: string
  amount: string
  transactionDescription: string
}

// @ts-ignore
function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? "-" : ""

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString()
    let j = i.length > 3 ? i.length % 3 : 0

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      // @ts-ignore
      (decimalCount
        ? decimal +
          // @ts-ignore
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    )
  } catch (e) {
    console.log(e)
  }
}

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

export class InputPhoneNumber extends Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: "",
      amount: "",
      transactionDescription: "",
    }
  }
  goConfirmTransfer = () => {
    const { phoneNumber, amount, transactionDescription } = this.state
    navigateService.navigate("confirmTransferToPhoneNumber", {
      phoneNumber: formatPhoneNumber(phoneNumber),
      amount: formatMoney(amount, 0),
      transactionDescription: transactionDescription
    })
    this.setState({
      phoneNumber: "",
      amount: "",
      transactionDescription: ""
    })
  }
  render() {
    const { phoneNumber, amount, transactionDescription } = this.state
    return (
      <Form style={{ paddingTop: spacing[5] }}>
        <Item style={{ marginBottom: spacing[2] }} stackedLabel={true} >
          <Label>{translate("common_phone")}*</Label>
          <Input
            placeholder={"..."}
            placeholderTextColor={palette.grey}
            style={styles.styleInput}
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
            value={phoneNumber}
            keyboardType="number-pad"
          />
        </Item>
        <Item style={{ marginBottom: spacing[2] }} stackedLabel={true}>
          <Label>{translate("amount")}*</Label>
          <Input
            placeholder={"..."}
            placeholderTextColor={palette.grey}
            style={styles.styleInput}
            onChangeText={amount => this.setState({ amount })}
            value={amount}
            keyboardType="number-pad"
          />
        </Item>
        <Item style={{ marginBottom: spacing[2] }} stackedLabel={true}>
          <Label>{"Transaction description"}</Label>
          <Input
            placeholder={"..."}
            placeholderTextColor={palette.grey}
            style={styles.styleInput}
            onChangeText= {transactionDescription => {this.setState({transactionDescription})}}
            value={transactionDescription}
          />
        </Item>
        <SizedBox h={2}/>
        <Text tx="noteTransfer" t1 style={styles.styleNote} />
        <Indicator title="recent" style={{ width: 125 }} />
        <RecentPhoneNumber phoneNumber="0769 423 567" />
        <RecentPhoneNumber phoneNumber="01269 423 567" />
        <View style={{ paddingTop: 160 }}>
          <Button
            bordered
            preset="primary"
            onPress={this.goConfirmTransfer}
            tx="tab_transfer"
            full
          />
        </View>
      </Form>
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
  styleInput: {
    // paddingBottom: spacing[2],
    fontSize: 14,
  },
})
export default InputPhoneNumber
