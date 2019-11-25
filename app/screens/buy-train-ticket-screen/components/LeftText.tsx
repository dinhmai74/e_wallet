import React, { useState } from "react"
import { Text } from "components"
import { Left } from "native-base"
import { TranslateKey } from "i18n/lang"

export function LeftText({ tx }: { tx: TranslateKey }) {
  return (
    <Left>
      <Text tx={tx} b2 />
    </Left>
  )
}

export default LeftText
