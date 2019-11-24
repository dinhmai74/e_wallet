import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { TranslateKey } from "i18n/lang"
import { View, Text, Divider, SizedBox } from "components"
import AmountPicker from "screens/buy-train-ticket-screen/components/AmountPicker"
import { color } from "theme"

interface Props {
  tx: TranslateKey
  value: number
  onChange: (val: number) => void
}

export function TicketRow({ tx, value, onChange }: Props) {
  return (
    <View>
      <View preset="row" style={styles.container}>
        <Text tx={tx} />
        <AmountPicker value={value} onChange={onChange} />
      </View>
      <SizedBox h={3} />
      <Divider color={color.textGrey} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    width: "100%",
  },
})

export default TicketRow
