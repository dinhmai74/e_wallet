import * as React from "react"
import { Text } from "../text"
import { View } from "components"
import { formatMoney } from "utils"
import { color } from "theme"

export interface TotalRowProps {
  value: string
  leftTx?: string
}

export function TotalRow(props: TotalRowProps) {
  // grab the props
  const { value, leftTx } = props

  return (
    <View preset={"row"} style={{ justifyContent: "space-between", width: "100%" }}>
      <Text
        // @ts-ignore
        tx={leftTx}
        color={color.textDescription}
      />
      <View preset={"row"}>
        <Text text={formatMoney(value, 0)} />
        <Text text={"đ"} />
      </View>
    </View>
  )
}

TotalRow.defaultProps = {
  leftTx: "common_total",
}
