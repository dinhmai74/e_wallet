// @flow
import color from "color"
import { Platform, Dimensions, PixelRatio } from "react-native"
import { PLATFORM } from "./commonColor"
import { color as Colors, Fonts, palette } from "../../app/theme"
import { normalize } from "react-native-elements"

const deviceHeight = Dimensions.get("window").height
const deviceWidth = Dimensions.get("window").width
const platform = Platform.OS
const platformStyle = PLATFORM.MATERIAL
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 || deviceWidth === 812 || deviceHeight === 896 || deviceWidth === 896)

export default {
  platformStyle,
  platform,

  // Accordion
  headerStyle: "#edebed",
  iconStyle: "#000",
  contentStyle: "#f5f4f5",
  expandedIconStyle: "#000",
  accordionBorderColor: "#d3d3d3",

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: "rgba(0,0,0,0.4)",
  innerTouchableBackgroundColor: palette.white,
  listItemHeight: 50,
  listItemBorderColor: "transparent",
  marginHorizontal: -15,
  marginLeft: 14,
  marginTop: 15,
  minHeight: 56,
  padding: 15,
  touchableTextColor: "#757575",

  // Android
  androidRipple: true,
  androidRippleColor: "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",
  buttonUppercaseAndroidText: true,

  // Badge
  badgeBg: "#ED1727",
  badgeColor: palette.white,
  badgePadding: 0,

  // Button
  buttonFontFamily: "Roboto",
  buttonDisabledBg: "#b5b5b5",
  buttonPadding: 6,
  get buttonPrimaryBg() {
    return this.brandPrimary
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor
  },
  get buttonInfoBg() {
    return this.brandInfo
  },
  get buttonInfoColor() {
    return this.inverseTextColor
  },
  get buttonSuccessBg() {
    return this.brandSuccess
  },
  get buttonSuccessColor() {
    return this.inverseTextColor
  },
  get buttonDangerBg() {
    return this.brandDanger
  },
  get buttonDangerColor() {
    return this.inverseTextColor
  },
  get buttonWarningBg() {
    return this.brandWarning
  },
  get buttonWarningColor() {
    return this.inverseTextColor
  },
  get buttonTextSize() {
    return this.fontSizeBase - 1
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6
  },

  // Card
  cardDefaultBg: palette.white,
  cardBorderColor: Colors.divider,
  cardBorderRadius: 2,
  cardItemPadding: platform === PLATFORM.IOS ? 10 : 12,

  // CheckBox
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 5,
  CheckboxIconSize: 16,
  CheckboxIconMarginTop: 1,
  CheckboxFontSize: 17,
  checkboxBgColor: "#039BE5",
  checkboxSize: 20,
  checkboxTickColor: palette.white,

  // Color
  brandPrimary: Colors.primary,
  brandInfo: Colors.brandInfo,
  brandSuccess: Colors.brandSuccess,
  brandDanger: Colors.brandDanger,
  brandWarning: Colors.brandWarning,
  brandDark: Colors.brandDark,
  brandLight: Colors.brandLight,

  // Container
  containerBgColor: Colors.containerBg,

  // Date Picker
  datePickerTextColor: palette.black,
  datePickerBg: "transparent",

  // FAB
  fabWidth: 56,

  // Font
  DefaultFontSize: 16,
  fontFamily: Fonts.type.base,
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: Colors.transparent,
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: Colors.dim,
  tabBarTextSize: normalize(9),
  activeTab: palette.white,
  sTabBarActiveTextColor: Colors.primary,
  tabBarActiveTextColor: Colors.primary,
  tabActiveBgColor: Colors.footBg,

  // Header
  toolbarBtnColor: palette.white,
  toolbarDefaultBg: Colors.primary,
  toolbarHeight: 56,
  toolbarSearchIconSize: 23,
  toolbarInputColor: palette.white,
  searchBarHeight: platform === PLATFORM.IOS ? 30 : 40,
  searchBarInputHeight: platform === PLATFORM.IOS ? 40 : 50,
  toolbarBtnTextColor: palette.white,
  toolbarDefaultBorder: Colors.primary,
  iosStatusbar: "dark-content",
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex()
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex()
  },

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: 28,
  iconHeaderSize: 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: "#D9D5DC",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "#ed2f2f",
  inputHeightBase: 40,
  get inputColor() {
    return Colors.textBlack
  },
  get inputColorPlaceholder() {
    return Colors.line
  },

  // Line Height
  buttonLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 24,

  // List
  listBg: "transparent",
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listBtnUnderlayColor: "#DDD",
  listItemPadding: 12,
  listNoteColor: "#808080",
  listNoteSize: 13,
  listItemSelected: Colors.primary,

  // Progress Bar
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",

  // Radio Button
  radioBtnSize: 23,
  radioSelectedColorAndroid: Colors.primary,
  radioBtnLineHeight: 24,
  get radioColor() {
    return this.brandPrimary
  },

  // Segment
  segmentBackgroundColor: Colors.primary,
  segmentActiveBackgroundColor: palette.white,
  segmentTextColor: palette.white,
  segmentActiveTextColor: Colors.primary,
  segmentBorderColor: palette.white,
  segmentBorderColorMain: Colors.primary,

  // Spinner
  defaultSpinnerColor: "#45D56E",
  inverseSpinnerColor: "#1A191B",

  // Tab
  tabDefaultBg: Colors.primary,
  topTabBarTextColor: "#b3c7f9",
  topTabBarActiveTextColor: palette.white,
  topTabBarBorderColor: palette.white,
  topTabBarActiveBorderColor: palette.white,

  // Tabs
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,

  // Text
  textColor: Colors.textBlack,
  inverseTextColor: palette.white,
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor
  },

  // Title
  titleFontfamily: Fonts.type.base,
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: palette.white,
  titleFontColor: palette.white,

  // Other
  borderRadiusBase: 8,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
}
