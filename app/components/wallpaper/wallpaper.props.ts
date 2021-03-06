import { ImageSourcePropType, ImageStyle } from "react-native"
import { WallpaperPresets } from "./wallpaper.presets"

export interface WallpaperProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ImageStyle

  /**
   * An optional background image to override the default image.
   */
  backgroundImage?: ImageSourcePropType

  /**
   * One of the different types of wallpaper presets.
   */
  preset?: WallpaperPresets

  linearDirection?: "horizontal" | "vertical"
  linearStart?: string
  linearEnd?: string
}
