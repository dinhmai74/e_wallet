import * as React from "react"
import { ViewStyle } from "react-native"
import { View, Text } from "components"

export interface RowTextProps {
  right?: string
  left?: string
  leftColor?: string
  rightColor?: string
  style?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function RowText(props: RowTextProps) {
  // grab the props
  const { left, right, style, ...rest } = props
  const textStyle = {}

  return (
    <View preset={"row"} style={{ justifyContent: "space-between" }}>
      {/*
      // @ts-ignore*/}
      <Text tx={left} />
      {/*
      // @ts-ignore*/}
      <Text tx={right} />
    </View>
  )
}
