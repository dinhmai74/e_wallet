import { color, palette } from "theme"

export const presets = {
  default: {
    color: color.textNavy,
  },
  white: {
    color: palette.white,
  },
}

export type PresetsType = keyof typeof presets
