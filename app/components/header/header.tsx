import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button"
import { Icon } from "../icon"
import { Text } from "../text"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import { navigateService } from "utils"
import { presets } from "components/header/header.presets"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export class Header extends React.Component<HeaderProps, {}> {
  static defaultProps = {
    onLeftPress: navigateService.goBack,
  }
  render() {
    const {
      onLeftPress,
      onRightPress,
      rightIcon,
      leftIcon,
      headerText,
      headerTx,
      titleStyle,
      preset = "default",
    } = this.props
    const header = headerText || (headerTx && translate(headerTx)) || ""

    const theme = presets[preset]

    return (
      <View style={{ ...ROOT, ...this.props.style }}>
        {leftIcon ? (
          <Button preset="link" onPress={onLeftPress}>
            <Icon icon={leftIcon} color={theme.color} />
          </Button>
        ) : (
          <View style={LEFT} />
        )}
        <View style={TITLE_MIDDLE}>
          <Text style={{ ...TITLE, ...titleStyle }} text={header} color={theme.color} />
        </View>
        {rightIcon ? (
          <Button preset="link" onPress={onRightPress}>
            <Icon icon={rightIcon} color={theme.color} />
          </Button>
        ) : (
          <View style={RIGHT} />
        )}
      </View>
    )
  }
}
