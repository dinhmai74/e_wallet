import React, { useState, memo } from "react"
import { Text, View } from "react-native"
import { CardItem, Input, Item, NativeBase } from "native-base"
import { spacing } from "theme"
import { translate } from "i18n"

interface Props extends NativeBase.Input {}

// eslint-disable-next-line react/display-name
export const InputCardItem = memo(({ ...rest }: Props) => {
  return (
    <CardItem>
      <Item style={{ paddingBottom: spacing[1] }}>
        <Input {...rest} />
      </Item>
    </CardItem>
  )
})
