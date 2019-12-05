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
    // 14
    tiny: 14,
    // 18
    small: 18,
    // 24
    normal: 24,
    // 32
    big: 32,
    // 45
    large: 45,
    // 50
    xl: 50,
  },
  images: {
    // 20
    small: 20,
    // 40
    medium: 40,
    // 60
    large: 60,
    // 120
    xl: 120,
    // 200
    giant: 200,
    // 500
    sliderHeight: 140,
    // 150
    sliderWidth: 300,
    logoWidth: width * 0.6,
    logoHeight: width * 0.7,
    smallLogoWidth: width * 0.25,
    smallLogoHeight: (width * 0.25) / 2.3,
    advertiseWidth: width - spacing[6] * 2,
    advertiseHeight: 120,
    movieAvt:{
      width: 100,
      height: 150
    },
    bankCardWidth: 300,
    bankCardHeight: 175,
  },
}
