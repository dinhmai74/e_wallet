import React, { useState } from "react"
import { CardItem } from "native-base"
import LeftText from "screens/buy-train-ticket/buy-train-ticket-screen/components/LeftText"
import RightItem from "screens/buy-train-ticket/buy-train-ticket-screen/components/RightItem"

interface Props {
  leftTx: string
  rightTx: string
  onPress?: (id: string, val: boolean) => void
  disabled?: boolean
}

export function CardItemWithModal({ leftTx, rightTx, onPress, disabled }: Props) {
  const opacity = disabled ? 0.3 : 1
  return (
    <CardItem style={{ justifyContent: "space-between", opacity }}>
      <LeftText
        // @ts-ignore
        tx={leftTx}
      />
      <RightItem tx={rightTx} onPress={onPress} disabled={disabled} />
    </CardItem>
  )
}

export default CardItemWithModal
