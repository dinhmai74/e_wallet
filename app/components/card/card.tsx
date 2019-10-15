import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Card as NBCard, CardItem, StyleProvider } from "native-base"
import { Text } from "../text"
import { TranslateKey } from "i18n/lang"

export interface CardProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TranslateKey
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function Card(props: CardProps) {
  // grab the props
  const { tx, text, style, ...rest } = props
  const textStyle = {}

  return (
    <NBCard>
      <CardItem>
        <Text tx={tx} text={text} style={textStyle} />
      </CardItem>
    </NBCard>
  )
}
