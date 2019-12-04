import * as React from "react"
import { View, ViewStyle, StyleSheet } from "react-native"
import { Text } from "../text"
import { Card, CardItem } from "native-base"
import { Button, Icon, icons, SizedBox } from "components"
import { color, metrics, palette, spacing } from "theme"

export interface WalletSelectionProps {
  style?: ViewStyle
  onPress?: () => void
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function WalletSelection(props: WalletSelectionProps) {
  // grab the props
  const { style, onPress, ...rest } = props
  const textStyle = {}

  return (
    <Card style={styles.container}>
      <CardItem>
        <Icon icon={"iconWalletTransaction"} size={metrics.images.medium} />
        <CardItem style={styles.content}>
          <Text text="Meo meo wallet" color={color.description} />
          <SizedBox h={2} />
          <Text text="3.000.000đ" />
        </CardItem>
      </CardItem>
      <View style={{ justifyContent: "center" }}>
        <Button
          onPress={onPress}
          transparent
          tx="change"
          style={styles.styledButton}
          textStyle={{ color: palette.blueGrey, fontSize: 16 }}
        />
      </View>
    </Card>
  )
}

WalletSelection.defaultProps = {
  onPress: () => {},
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: spacing[3],
  },
  content: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  styledButton: {},
})
