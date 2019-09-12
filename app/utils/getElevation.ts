import { Platform } from "react-native"

export const getElevation = (elevation: number = 1) => {
  if (Platform.OS === "android") {
    return { elevation }
  }

  if (elevation === 0) {
    return {
      shadowColor: "transparent",
      zIndex: 0,
    }
  }

  return {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: elevation / 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  }
}
