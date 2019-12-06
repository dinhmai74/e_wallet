import React, { Component } from "react"
import { ViewStyle, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import { Screen, Text, View, Header } from "components"
import { spacing, color, palette } from "theme"
import CashIn from "screens/cash-screen/cash-in/cash-in"
import { TabView, SceneMap, TabBar } from "react-native-tab-view"
import Animated from "react-native-reanimated"
import ConfirmCashIn from "screens/confirm-cash-in/confirm-cash-in"
import DisplayMoney from "screens/confirm-cash-in/display-money"
import InputBank from "screens/confirm-cash-in/input-bank"

function Empty() {
  return (
    <Screen style={ROOT} backgroundColor={color.transparent} preset="scroll">
      <DisplayMoney style={{ opacity: 0 }} />
      <InputBank style={{ opacity: 0 }} />
    </Screen>
  )
}

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  // paddingHorizontal: spacing[2],
}

class CashScreen extends Component {
  state = {
    index: 0,
    routes: [{ key: "first", title: "Cash in" }, { key: "second", title: "Cash out" }],
    title: {
      color: "black",
    },
  }

  renderLabel = props => ({ route, focused, index }) => {
    const color = focused ? "#353535" : "#cccccc"
    return <Animated.Text style={[styles.label, { color }]}>{route.title}</Animated.Text>
  }

  renderHeader = props => (
    <TabBar
      {...props}
      pressColor="rgba(255, 64, 129, .5)"
      renderLabel={this.renderLabel(props)}
      indicatorStyle={styles.indicator}
      tabStyle={styles.tab}
      style={styles.tabbar}
    />
  )

  render() {
    return (
      <View full>
        <Header leftIcon={"back"} headerTx="cash" />
        <Screen style={ROOT} backgroundColor={color.transparent} preset="scroll">
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: CashIn,
              second: Empty,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get("window").width }}
            renderTabBar={this.renderHeader}
          />
        </Screen>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  indicator: {
    backgroundColor: palette.warmPink,
  },
  label: {
    fontSize: 13,
    // fontWeight: "bold",
    margin: 8,
  },
  tabbar: {
    backgroundColor: "transparent",
    marginLeft: spacing[8],
  },
  tab: {
    opacity: 1,
    width: 120,
    justifyContent: "flex-end",
  },
})
export default CashScreen
