import { Text } from "components/text"
import React from "react"
import { Image } from "react-native"
import { color, palette } from "theme"
import { presets } from "./wallpaper.presets"
import { WallpaperProps } from "./wallpaper.props"
import LinearGradient from "react-native-linear-gradient"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Wallpaper(props: WallpaperProps) {
  // grab the props
  const { preset = "stretch", style: styleOverride, backgroundImage } = props

  // assemble the style
  const presetToUse = presets[preset] || presets.stretch
  const style = { ...presetToUse, ...styleOverride }

  // figure out which image to use
  const source = backgroundImage

  if (source) return <Image source={source} style={style} />

  return (
    <LinearGradient
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 0.5, y: 1.0 }}
      colors={[color.linear.start, color.linear.end]}
      style={style}
    />
  )
}
