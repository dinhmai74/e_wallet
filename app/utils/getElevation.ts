import { Platform } from "react-native"

export const getElevation = (elevation: number = 2) => {
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
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 15,
    shadowOpacity: 1,
  }
}
