import * as React from "react"
import { ActivityIndicator, ActivityIndicatorProperties } from "react-native"
import { color } from "theme"

export function AppLoading(props: ActivityIndicatorProperties) {
  // grab the props

  return <ActivityIndicator {...props} />
}

AppLoading.defaultProps = {
  color: color.palette.white,
  size: "small",
}
