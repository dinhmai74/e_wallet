import * as React from "react"
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Text, SizedBox } from ".."
import { Icon } from "components"
import { spacing } from "theme"
import { translate } from "i18n"
import { navigateService } from "utils"
import { presets } from "components/header/header.presets"
import { Header as NBHeader, Title, Body, Row } from "native-base"

export class Header extends React.Component<HeaderProps, {}> {
  static defaultProps = {
    onLeftPress: () => navigateService.goBack(),
  }

  renderLeftIcon = () => {
    const { leftIcon, onLeftPress } = this.props
    if (leftIcon) {
      return <Icon icon={leftIcon} onPress={onLeftPress} />
    }

    return null
  }

  render() {
    const {
      onRightPress,
      rightIcon,
      headerText,
      headerTx,
      titleStyle,
      content,
      style,
      preset = "default",
    } = this.props
    const title = headerText || (headerTx && translate(headerTx)) || ""

    const theme = presets[preset]

    return (
      <NBHeader transparent style={[theme, style]}>
        <View style={styles.row}>
          {this.renderLeftIcon()}
          <SizedBox w={2} />
          <Text preset={"header"}>{title}</Text>
        </View>
        {content}
      </NBHeader>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
})
