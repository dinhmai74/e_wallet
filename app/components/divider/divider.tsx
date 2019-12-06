import * as React from "react"
import { Divider as EDivider, DividerProps as EProps } from "react-native-elements"
import { mergeAll, flatten } from "ramda"
import { color } from "theme"

export interface DividerProps extends EProps {
  color?: string
  height?: number
  width?: any
}

export class Divider extends React.PureComponent<DividerProps> {
  static defaultProps = {
    color: color.divider,
    height: 1,
  }

  render() {
    // grab the props
    const { height, color, style, width, ...rest } = this.props
    const dStyle = mergeAll(
      flatten([
        color && { backgroundColor: color },
        height && { height },
        width && { width },
        style,
      ]),
    )

    return <EDivider style={dStyle} {...rest} />
  }
}
