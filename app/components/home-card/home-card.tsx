import * as React from "react"
import { Card, CardItem, Body, NativeBase } from "native-base"

import ScanItem from "./scan-item"
import LinkCard from "./link-card"
import RechargeWalletItem from "./recharge-wallet-item"
export interface HomeCardProps extends NativeBase.Card {
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function HomeCard(props: HomeCardProps) {
  // grab the props
  const {  style, ...rest } = props
  return (
    // @ts-ignore
    <Card style={[style, {flexDirection: 'row', justifyContent: 'center',}]} {...rest} >
      <ScanItem/>
      <LinkCard />
      <RechargeWalletItem/>
    </Card>
  )
}
