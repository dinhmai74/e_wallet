import React, { useState } from "react"
import { Text, View, Icon, SizedBox, IconTypes } from "components"
import { TranslateKey } from "i18n/lang"
import { color as colors } from "theme"

interface Props {
  color: string
  tx: TranslateKey
  icon?: IconTypes
  style?: any
}

export const NoticeSeatRow = ({ style,icon,color, tx }: Props) => {
  return (
    <View preset={"row"} style={style}>
      <Icon icon={icon} color={color} />
      <SizedBox w={4} h={1} />
      <Text tx={tx} color={colors.textDescription} b2 />
    </View>
  )
}

NoticeSeatRow.defaultProps = {
  icon: "seat"
}
