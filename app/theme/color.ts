export const palette = {
  black: "#050505",
  white: "#ffffff",
  offWhite: "#e6e6e6",
  lightWhite: "#f5f6ff",
  whiteSmoke: "#F4F4F4",
  orange: "#FBA928",
  orangeDarker: "#EB9918",
  lightGrey: "#939AA4",
  lighterGrey: "#CDD4DA",
  grey: "#ccc",
  angry: "#dd3333",
  lightStateBlue: "#5f7cfc",
  mediumStateBlue: "#a78ef1",
  columbiaBlue: "#aaecfe",
  prussianBlue: "#001433",
  lightRed: "#EE5F7B",
  blue: "#62B1F6",
  green: "#34c759",
  realOrange: "#d9534f",
  navy: "#001433",
  greyishBrown: "#484848",
  brownGrey: "#959595",
  warmPink: "#ee5f7b",
  paleGrey: "#f7f8f9",
  blueGrey: "#91a2bc",
  battleshipGrey36: "rgba(120, 120, 128, 0.36)",
}

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  containerBg: palette.white,
  linear: {
    start: "#5B86E5",
    middle: "#12D8FA",
    end: "#36D1DC",
  },
  /* ------------- little dark white bg ------------- */
  footBg: palette.lightWhite,
  /**
   * The main tinting color.
   */
  primary: palette.warmPink,
  primaryDarker: palette.orangeDarker,
  secondary: palette.mediumStateBlue,
  brandInfo: palette.blue,
  brandSuccess: palette.green,
  brandDanger: palette.realOrange,
  brandWarning: palette.orange,
  brandDark: palette.black,
  brandLight: palette.whiteSmoke,
  divider: palette.grey,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
  text: palette.navy,
  textDescription: palette.blueGrey,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,
}
