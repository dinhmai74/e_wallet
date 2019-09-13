import React from "react"
import { Image } from "react-native"
import { color } from "theme"
import { presets } from "./wallpaper.presets"
import { WallpaperProps } from "./wallpaper.props"
import LinearGradient from "react-native-linear-gradient"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export class Wallpaper extends React.PureComponent<WallpaperProps> {
  static defaultProps = {
    linearDirection: "vertical",
    linearStart: color.linear.start,
    linearEnd: color.linear.end,
  }

  render() {
    // grab the props
    const {
      preset = "stretch",
      style: styleOverride,
      backgroundImage,
      linearDirection,
      linearEnd,
      linearStart,
    } = this.props

    // assemble the style
    const presetToUse = presets[preset] || presets.stretch
    const style = { ...presetToUse, ...styleOverride }

    // figure out which image to use
    const source = backgroundImage

    if (source)
      return (
        <Image
          source={source}
          // @ts-ignore
          style={style}
        />
      )

    const start = linearDirection === "vertical" ? { x: 0.5, y: 0.0 } : { x: 1, y: 0 }
    const end = linearDirection === "vertical" ? { x: 0.5, y: 1.0 } : { x: 0, y: 0 }

    return (
      <LinearGradient
        start={start}
        end={end}
        colors={[linearStart, linearEnd]}
        // @ts-ignore
        style={style}
      />
    )
  }
}
