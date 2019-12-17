import * as React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"
import { Card, CardItem } from "native-base"
import { Icon, SizedBox, Text } from "components"
import { color, metrics, spacing } from "theme"

export interface CardDiscountProps {
  style?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function CardDiscount(props: CardDiscountProps) {
  // grab the props
  const textStyle = {}

  return (
    <Card style={{marginHorizontal: spacing[3]}}>
      <CardItem style={styles.item}>
        <Icon icon={"iconGarena"} size={metrics.images.xl} style={{ alignSelf: "center" }} />
      </CardItem>
      <CardItem style={styles.item}>
        <Text tx={"textDiscount"} color={color.textGreen} />
      </CardItem>
      <SizedBox h={4} />
    </Card>
  )
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
  },
})
