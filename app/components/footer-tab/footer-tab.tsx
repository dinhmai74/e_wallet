import { StyleSheet } from "react-native"
import { Button, View } from "components"
import { Footer, FooterTab as NBFooterTab, Icon } from "native-base"
import * as React from "react"
import { Text } from "../text"
import { NavigationBottomTabOptions } from "react-navigation-tabs/lib/typescript/src"
import { bottomTabRoute } from "navigation/primary-navigator"
import { navigateService } from "utils"
import { SizedBox } from "components/sized-box"
import { color, metrics, spacing } from "theme"
import { Icon as EIcon } from "react-native-elements"
import RBSheet from "react-native-raw-bottom-sheet"
import Animated from "react-native-reanimated"
import { ItemPopup } from "components/item-popup"

interface State {
  openModal: boolean
}

export interface FooterTabProps extends NavigationBottomTabOptions {
  [rest: string]: any
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */

export class FooterTab extends React.Component<FooterTabProps, State> {
  private refBottomSheet: any
  constructor(props: FooterTabProps) {
    super(props)
    this.state = {
      openModal: false,
    }
  }

  trans = new Animated.Value(0)

  goTransferATMCard = () => {
    navigateService.navigate("transferATM")
    this.refBottomSheet.close()
  }

  goTransferPhoneNumber = () => {
    navigateService.navigate("transferPhoneNumber")
    this.refBottomSheet.close()
  }
  render() {
    // grab the props
    const { navigation } = this.props
    const { state } = navigation
    const { routes } = state
    const { index: activeIndex } = state
    const firstRoutes = routes.slice(0, state.routes.length / 2)
    const secondRoutes = routes.slice(routes.length / 2, routes.length)

    return (
      <Footer>
        {this.renderBottomSheet()}
        <NBFooterTab>
          {firstRoutes.map((route, index) => {
            return this.renderTab(route, index, activeIndex)
          })}

          <EIcon
            size={metrics.icon.small}
            name={"md-arrow-round-up"}
            type={"ionicon"}
            color={color.primary}
            onPress={this.openModal.bind(this)}
            reverse
          />

          {secondRoutes.map((route, index) => {
            return this.renderTab(route, index + routes.length / 2, activeIndex)
          })}
        </NBFooterTab>
      </Footer>
    )
  }

  private renderTab = (route, index, activeIndex) => {
    const { routeName } = route
    const active = index === activeIndex
    return (
      <Button
        vertical
        key={index}
        style={styles.button}
        active={active}
        onPress={this.switchScreen.bind(this, routeName)}
      >
        {active && <View style={styles.divider} />}
        <SizedBox h={4} />
        <Icon name={`ios-${routeName}`} style={{ fontSize: metrics.icon.small }} />
        <Text
          // @ts-ignore
          tx={`tab_${routeName}`}
          numberOfLines={1}
        />
        <SizedBox h={1} />
      </Button>
    )
  }

  private switchScreen = (screen: bottomTabRoute) => {
    navigateService.navigate(screen)
  }

  private openModal = () => {
    this.refBottomSheet.open()
  }

  private renderBottomSheet = () => (
    <View>
      <RBSheet
        ref={ref => {
          this.refBottomSheet = ref
        }}
        height={250}
        duration={250}
        customStyles={{
          container: {
            // justifyContent: "center",
            // alignItems: "center",
            borderRadius: 8,
          },
        }}
      >
        <Text
          tx="tab_transfer"
          style={{ paddingTop: spacing[5], paddingLeft: spacing[4] }}
          s1
          bold
        />
        <View style={{ paddingTop: spacing[5] }}>
          <ItemPopup icon="iconBankAccount" content="transferBankAccount" onPress={() => {}} />
          <ItemPopup
            icon="iconAtmCard"
            content="transferAtmCard"
            onPress={this.goTransferATMCard}
          />
          <ItemPopup
            icon="iconMobileNumber"
            content="transferMobileNumber"
            onPress={this.goTransferPhoneNumber}
          />
        </View>
      </RBSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  divider: {
    position: "absolute",
    backgroundColor: color.primary,
    height: metrics.divider.thick,
    left: spacing[2],
    right: spacing[2],
    top: 0,
  },
  button: {},
})
