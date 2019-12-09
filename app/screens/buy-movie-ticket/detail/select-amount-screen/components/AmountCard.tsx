import React, { useState } from "react"
import { translate } from "i18n"
import { View, Text, Icon, SizedBox } from "components"
import { Card, CardItem } from "native-base"
import AmountPicker from "components/AmountPicker"
import { formatMoney, unitTx } from "utils"
import { color } from "theme"

interface Props {
  value: number
  title: string
  amount: number
  onChange: (value) => void
}

export const AmountCard = (props: Props) => {
  const { value, title, amount, onChange } = props
  return (
    <Card>
      <CardItem >
        <Text text={translate(title)} b2 color={color.textDescription} />
      </CardItem>
      <CardItem style={{ justifyContent: "space-between" }}>
        <Text text={formatMoney(value, 0) + unitTx} b1 />
        <AmountPicker value={amount} onChange={val=>onChange(val)} />
      </CardItem>
      <SizedBox h={4} />
    </Card>
  )
}
