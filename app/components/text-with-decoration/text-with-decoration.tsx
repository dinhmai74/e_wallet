import * as React from "react"
import { StyleSheet, ViewStyle } from "react-native"
import { View, Text, Divider } from "components"
import { TranslateKey } from "i18n/lang"
import { color, spacing } from "theme"

export interface TextWithDecorationProps {
  color?: string
  tx: TranslateKey
  textFlex?: number
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function TextWithDecoration(props: TextWithDecorationProps) {
  // grab the props
  const { tx, color, textFlex, ...rest } = props

  return (
    <View style={styles.container} preset={"row"} {...rest}>
      <Divider color={color} style={styles.divider} />
      <Text tx={tx} style={[styles.text, { flex: textFlex }]} preset={"center"} color={color} />
      <Divider color={color} style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 2,
    marginHorizontal: spacing[2],
  },
  divider: {
    flex: 1,
  },
})

TextWithDecoration.defaultProps = {
  color: color.description,
}
