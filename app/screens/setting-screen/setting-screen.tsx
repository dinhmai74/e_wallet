import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, Image, StyleSheet } from "react-native"
import { Screen } from "components/screen"
import { spacing, palette } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import Info from "./info"
import AllItem from "./all-item"
import { Button, Header, icons, Text, View } from "components"

export interface SettingScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5],
  paddingTop: spacing[3],
}

// @inject("mobxstuff")
@observer
export class SettingScreen extends React.Component<SettingScreenProps, {}> {
  render() {
    return (
      <View full>
        <Header headerTx={"setting_header"} />
        <Screen style={ROOT} preset="scroll">
          <Info />
          <AllItem />
          <Image source={icons.promotionImage} style={styles.styleImage} />
          <Button bordered tx={"common_logout"} onPress={() => {}} />
        </Screen>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  styleImage: {
    height: 130,
    width: null,
    flex: 1,
    borderRadius: 5,
    marginTop: spacing[4],
    marginBottom: spacing[6],
  },
  styleButton: {
    borderRadius: 10,
    borderColor: palette.warmPink,
    borderWidth: 0.5,
  },
  styleText: {
    textAlign: "center",
    flex: 1,
  },
})
