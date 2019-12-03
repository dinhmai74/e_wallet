import React, { useState } from "react"
import { Text, View, Icon, SizedBox } from "components"
import { TranslateKey } from "i18n/lang"
import { color as colors } from "theme"

interface Props {
  color: string
  tx: TranslateKey
}

export const NoticeRow = ({ color, tx }: Props) => {
  return (
    <View preset={"row"}>
      <Icon icon={"seat"} color={color} />
      <SizedBox w={4} h={1} />
      <Text tx={tx} color={colors.textDescription} />
    </View>
  )
}
