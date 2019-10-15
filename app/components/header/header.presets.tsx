import { color, palette, spacing } from "theme"
import { ViewStyle } from "react-native"

const DEFAULT = {
  marginLeft: spacing[5],
  paddingTop: spacing[4],
} as ViewStyle

export const presets = {
  default: {
    ...DEFAULT,
  },
}

export type PresetsType = keyof typeof presets
