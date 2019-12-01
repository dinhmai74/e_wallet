import { presets } from "components/text/text.presets"
import * as React from "react"
import { StyleSheet, View as RNView, ViewStyle } from "react-native"
import { flatten, mergeAll } from "ramda"
import { spacing } from "theme"

export interface ViewProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  preset?: ViewType
  children?: any
  full?: boolean
  flex?: number
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

const BASE = {
  flexDirection: "column",
} as ViewStyle

export const viewPresets = {
  row: {
    flexDirection: "row",
  },
  col: BASE,
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: spacing[6],
  },
}
export type ViewType = keyof typeof viewPresets

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export class View extends React.PureComponent<ViewProps> {
  static defaultProps = {
    preset: "col",
  }
  render() {
    // grab the props
    const { full, children, flex, preset, style: styleOverride, ...rest } = this.props
    const style = mergeAll(
      flatten([viewPresets[preset], full && { flex: 1 }, flex && { flex }, styleOverride]),
    )
    return (
      // @ts-ignore
      <RNView style={style} {...rest}>
        {children}
      </RNView>
    )
  }
}
