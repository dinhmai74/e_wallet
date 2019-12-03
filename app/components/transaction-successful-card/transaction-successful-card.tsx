import * as React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"
import { Text } from "../text"
import { Card, CardItem } from "native-base"
import { Icon, SizedBox } from "components"
import { color, metrics } from "theme"

export interface TransactionSuccessfulCardProps {
  style?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function TransactionSuccessfulCard(props: TransactionSuccessfulCardProps) {
  // grab the props
  const textStyle = {}

  return (
    <Card>
      <CardItem style={styles.item}>
        <Icon icon={"iconSucces"} size={metrics.images.xl} style={{ alignSelf: "center" }} />
      </CardItem>
      <CardItem style={styles.item}>
        <Text tx={"transactionSuccessfull"} color={color.textGreen} />
      </CardItem>
      <SizedBox h={4}/>
    </Card>
  )
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
  },
})
