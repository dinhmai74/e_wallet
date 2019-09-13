import { TouchableOpacity, Animated, ViewStyle, StyleSheet } from "react-native"
import { Button, ButtonProps, Divider, View } from "components"
import { Footer, FooterTab as NBFooterTab, Icon } from "native-base"
import * as React from "react"
import { Text } from "../text"
import { NavigationBottomTabOptions } from "react-navigation-tabs/lib/typescript/src"
import { PrimaryTabRoute } from "navigation/primary-navigator"
import { navigateService } from "utils"
import { SizedBox } from "components/sized-box"
import { color, metrics } from "theme"

export interface FooterTabProps extends NavigationBottomTabOptions {
  [rest: string]: any
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export class FooterTab extends React.Component<FooterTabProps> {
  private switchScreen = (screen: PrimaryTabRoute) => {
    navigateService.navigate(screen)
  }

  render() {
    // grab the props
    const { navigation } = this.props
    const { state } = navigation
    console.tron.log("state", state)
    const { index: activeIndex } = state

    return (
      <Footer>
        <NBFooterTab>
          {state.routes.map((route, index) => {
            return this.renderTab(route, index, activeIndex)
          })}
        </NBFooterTab>
      </Footer>
    )
  }

  private renderTab = (route, index, activeIndex) => {
    const { routeName } = route
    const active = index === activeIndex
    const divider: ViewStyle = active && styles.divider
    return (
      <Button
        vertical
        key={index}
        active={active}
        onPress={this.switchScreen.bind(this, routeName)}
        style={divider}
      >
        <SizedBox h={4} />
        <Icon name={`ios-${routeName}`} />
        <Text
          // @ts-ignore
          tx={`tab_${routeName}`}
        />
        <SizedBox h={1} />
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  divider: {
    borderTopColor: color.primary,
    borderTopWidth: metrics.divider.thick,
  },
})
