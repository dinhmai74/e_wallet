import * as React from "react"
import { View, Image, ImageStyle, StyleSheet } from "react-native"
import { IconProps } from "components"
import { icons } from "./icons"
import { flatten, mergeAll } from "ramda"
import { color, metrics } from "theme"
import { TouchableOpacity } from "react-native-gesture-handler"

export * from "./icon.props"

const ROOT: ImageStyle = {
  resizeMode: "contain",
  backgroundColor: color.transparent,
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, size, bg, color, containerStyle, onPress, source} = props
  const imageSize = size || metrics.icon.normal
  const sizeImage = { width: imageSize, height: imageSize }
  const bgImage = bg && { backgroundColor: bg }
  const colorImage = color && { tintColor: color }

  // @ts-ignore
  const style: ImageStyle = mergeAll(flatten([ROOT, sizeImage, colorImage, styleOverride]))

  const renderIcon = () => {
    return (
      // @ts-ignore
      <View style={[bgImage, containerStyle]}>
        <Image
          style={style}
          // @ts-ignore
          source={source || icons[icon]}
        />
      </View>
    )
  }

  const renderTouchableIcon = () => {
    return <TouchableOpacity onPress={onPress}>{renderIcon()}</TouchableOpacity>
  }

  if (onPress) return renderTouchableIcon()

  return renderIcon()
}
