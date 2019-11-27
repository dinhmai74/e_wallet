import * as React from "react"
import { Divider as EDivider, DividerProps as EProps } from "react-native-elements"
import { mergeAll, flatten } from "ramda"
import { color } from "theme"
import { View, ViewProps } from "components"
import { ViewStyle } from "react-native"

interface DividerProps extends ViewProps {
  color?: string
  width?: number
}

const BASE: ViewStyle = {
  height: "100%",
  backgroundColor: color.divider,
}

export class ColDivider extends React.PureComponent<DividerProps> {
  static defaultProps = {
    color: color.divider,
    width: 1,
  }

  render() {
    // grab the props
    const { width, color, style, ...rest } = this.props
    const dStyle = mergeAll(
      flatten([BASE && color && { backgroundColor: color }, width && { width }, style]),
    )

    return <View style={dStyle} {...rest} />
  }
}
