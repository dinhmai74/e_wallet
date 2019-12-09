import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { Text, View, Icon, SizedBox } from "components"
import { color } from "theme"

interface Props {
  onChange?: (val: number) => void
  value: number
}

const AmountPicker = (props: Props) => {
  const { onChange, value } = props

  return (
    <View preset={"row"}>
      <Icon
        icon="minus"
        onPress={() => {
          if (value > 0) onChange(value - 1)
        }}
      />
      <SizedBox h={1} w={2} />
      <Text color={color.textGrey}>{value}</Text>
      <SizedBox h={1} w={2} />
      <Icon
        icon="add"
        onPress={() => {
          onChange(value + 1)
        }}
      />
    </View>
  )
}

AmountPicker.defaultProps = {
  value: 0,
  onChange: () => {},
}

const styles = StyleSheet.create({
  container: {},
})

export default AmountPicker
