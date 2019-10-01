import * as React from "react"
import { Card, NativeBase } from "native-base"

import ScanItem from "./scan-item"
import LinkCard from "./link-card"
import RechargeWalletItem from "./recharge-wallet-item"
import { spacing } from "theme"
export interface HomeCardProps extends NativeBase.Card {}

export function HomeCard(props: HomeCardProps) {
  // grab the props
  const { style, ...rest } = props
  return (
    // @ts-ignore
    <Card
      style={[
        style,
        {
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: spacing[5],
          paddingBottom: spacing[2],
        },
      ]}
      {...rest}
    >
      <ScanItem />
      <LinkCard />
      <RechargeWalletItem />
    </Card>
  )
}
