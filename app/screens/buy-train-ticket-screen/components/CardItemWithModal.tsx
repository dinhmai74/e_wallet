import React, { useState } from "react"
import { CardItem } from "native-base"
import LeftText from "screens/buy-train-ticket-screen/components/LeftText"
import RightItem from "screens/buy-train-ticket-screen/components/RightItem"

interface Props {
  leftTx: string
  rightTx: string
  onPress?: (id: string, val: boolean) => void
}

export function CardItemWithModal({ leftTx, rightTx, onPress }: Props) {
  return (
    <CardItem style={{ justifyContent: "space-between" }}>
      <LeftText
        // @ts-ignore
        tx={leftTx}
      />
      <RightItem tx={rightTx} onPress={onPress} />
    </CardItem>
  )
}

export default CardItemWithModal
