import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../text"
import { TotalRow } from "components/total-row"

export interface SurplusProps {}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function Surplus(props: SurplusProps) {
  return <TotalRow leftTx="surPlus" value={"300000"} />
}
