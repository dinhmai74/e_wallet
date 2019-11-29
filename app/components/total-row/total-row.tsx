import * as React from "react"
import { ViewStyle } from "react-native"
import { Text } from "../text"
import { View } from "components"

export interface TotalRowProps {
  value: string
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function TotalRow(props: TotalRowProps) {
  // grab the props
  const { value } = props

  return (
    <View preset={"row"} style={{ justifyContent: "space-between" }}>
      <Text tx={"common_total"} />
      <View preset={"row"}>
        <Text text={value} />
        <Text text={"đ"} />
      </View>
    </View>
  )
}
