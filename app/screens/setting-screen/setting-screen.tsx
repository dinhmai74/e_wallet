import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, Image, StyleSheet } from "react-native"
import { Screen } from "../../components/screen"
import { color, spacing, palette } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import Info from "./info"
import ItemSelection from "./item-selection"
import AllItem from "./all-item"
import { Thumbnail } from "native-base"
import { icons, Button, Text } from "components"
import { colors } from "react-native-elements"

export interface SettingScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5]
}

// @inject("mobxstuff")
@observer
export class SettingScreen extends React.Component<SettingScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" tx="settingScreen.header" />
        <Info />
        <AllItem />
        <Image source={icons.promotionImage} style={styles.styleImage}/>
        <Button style={styles.styleButton} transparent >
         <Text tx="signOut" style={styles.styleText} />
        </Button>
      </Screen>
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
    marginBottom: spacing[6]
  },
  styleButton: {
    borderRadius: 10,
    borderColor: palette.warmPink,
    borderWidth: 0.5,
  },
  styleText: {
    textAlign: 'center',
    flex: 1
  }
})