import * as React from "react"
import { Divider as EDivider, DividerProps as EProps } from "react-native-elements"
import { mergeAll, flatten } from "ramda"
import { color } from "theme"

export interface DividerProps extends EProps {
  color?: string
  height?: number
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export class Divider extends React.PureComponent<DividerProps> {
  static defaultProps = {
    color: color.divider,
    height: 1,
  }

  render() {
    // grab the props
    const { height, color, style, ...rest } = this.props
    const dStyle = mergeAll(
      flatten([color && { backgroundColor: color }, height && { height }, style]),
    )

    return <EDivider style={dStyle} {...rest} />
  }
}
