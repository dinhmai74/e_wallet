import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../text"
import styled from "styled-components"
import { color, metrics } from "theme"
import { SizedBox } from "components/sized-box"
import { TouchableOpacity } from "react-native-gesture-handler"
import { TranslateKey } from "i18n/lang"
import { Row, Left, Right } from "native-base"
import { Icon, Divider } from "components"

export interface UnderlineTextProps {
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

  containerstyle?: ViewStyle
  onPress?: () => void

  dividerColor?: string
  hasIcon?: boolean
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function UnderlineText(props: UnderlineTextProps) {
  // grab the props
  const { tx, dividerColor, hasIcon, text, containerstyle, style, onPress, ...rest } = props
  const textStyle = { ...style }

  return (
    <TouchableOpacity style={containerstyle} onPress={onPress}>
      <View style={{ flexDirection: "row" }}>
        <Left>
          <Text tx={tx} text={text} style={textStyle} {...rest} />
        </Left>
        <Right>
          <Icon
            icon="check"
            size={metrics.icon.tiny}
            color={hasIcon ? color.textNavy : color.transparent}
          />
        </Right>
      </View>
      <SizedBox h={1} />
      <Divider color={dividerColor} />
    </TouchableOpacity>
  )
}

UnderlineText.defaultProps = {
  onPress: () => {},
}
