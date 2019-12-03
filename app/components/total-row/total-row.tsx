import * as React from "react"
import { Text } from "../text"
import { View } from "components"
import { formatMoney } from "utils"

export interface TotalRowProps {
  value: string
}

export function TotalRow(props: TotalRowProps) {
  // grab the props
  const { value } = props

  return (
    <View preset={"row"} style={{ justifyContent: "space-between" }}>
      <Text tx={"common_total"} />
      <View preset={"row"}>
        <Text text={formatMoney(value, 0)} />
        <Text text={"đ"} />
      </View>
    </View>
  )
}
