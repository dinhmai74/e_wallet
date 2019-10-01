import { Dimensions } from "react-native"
import { spacing } from "./spacing"

const { width, height } = Dimensions.get("window")

// based on iphone 5s's scale
// Use iPhone8 1x as base size which is 375 x 667
const baseWidth = 375
const baseHeight = 667

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)
export const scaledSize = (size: number) => Math.ceil(size * scale)

export const screen = { height, width }

export const metrics = {
  screen,
  divider: {
    light: 1,
    normal: 2,
    thick: 3,
  },
  icon: {
    tiny: 14,
    small: 18,
    normal: 24,
    big: 32,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logoWidth: width * 0.6,
    logoHeight: width * 0.7,
    smallLogoWidth: width * 0.25,
    smallLogoHeight: (width * 0.25) / 2.3,
    advertiseWidth: width - spacing[6] * 2,
    advertiseHeight: 120,
  },
}
