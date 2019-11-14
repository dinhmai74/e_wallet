// @flow
import variable from "./../variables/platform"
import { getElevation } from "utils"
import { color } from "theme"

export default (variables /* : * */ = variable) => {
  const cardTheme = {
    ".transparent": {
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      elevation: null,
      backgroundColor: "transparent",
      borderWidth: 0,
    },
    ".noShadow": {
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      elevation: null,
    },
    flexWrap: "nowrap",
    backgroundColor: variables.cardDefaultBg,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.border,
    ...getElevation(),
  }

  return cardTheme
}
