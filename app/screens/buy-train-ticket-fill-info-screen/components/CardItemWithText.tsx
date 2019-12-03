import React, { useState } from "react"
import { RowText } from "components"
import { CardItem } from "native-base"
import { color } from "theme"

interface Props {
  left?: string
  right?: string
}

export function CardItemWithText({ ...rest }: Props) {
  return (
    <CardItem>
      <RowText {...rest} leftColor={color.textDescription} style={{ width: "100%" }} />
    </CardItem>
  )
}

export default CardItemWithText
