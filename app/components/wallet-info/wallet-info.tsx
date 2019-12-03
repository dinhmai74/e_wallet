import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../text"
import { TextWithDecoration } from "components/text-with-decoration"
import { SizedBox, TotalRow } from "components"

export interface WalletInfoProps {
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function WalletInfo(props: WalletInfoProps) {
  return (
    <>
      <TextWithDecoration tx={"trainTicket_walletInfo"} />
      <SizedBox h={4}/>
      <TotalRow value={"2400000"} leftTx={"surPlus"} />
    </>
  )
}
