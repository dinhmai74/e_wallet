import React, { Component } from "react"
import { ViewStyle, Dimensions, StyleSheet, View, TouchableOpacity } from "react-native"
import { Screen, Text } from "components"
import { spacing, color, palette } from "theme"
import CashIn from "screens/cash-screen/cash-in/cash-in"
import { TabView, SceneMap, TabBar } from "react-native-tab-view"
import Animated from "react-native-reanimated"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  // paddingHorizontal: spacing[2],
}

export class CashScreen extends Component {
  state = {
    index: 0,
    routes: [{ key: "first", title: "Cash in" }, { key: "second", title: "Cash out" }],
    title: {
      color: "black",
    },
  }
  renderLabel = props => ({ route, focused, index }) => {
    const color = focused ? "#353535" : "#000000"
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
      <Screen style={ROOT} backgroundColor={color.transparent} preset="scroll">
        <Text preset="header" tx="cash" />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: CashIn,
            second: CashIn,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get("window").width }}
          renderTabBar={this.renderHeader}
        />
      </Screen>
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
