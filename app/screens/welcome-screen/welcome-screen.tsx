import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { Wallpaper } from "../../components/wallpaper"
import { color, spacing } from "../../theme"
import { bowserLogo } from "./"
import { navigateService } from "utils"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }

const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: "italic",
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
}
const CONTENT: TextStyle = {
  ...TEXT,
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}

const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}

export class WelcomeScreen extends React.Component<WelcomeScreenProps, {}> {
  nextScreen = () => navigateService.navigate("bottomStack")

  render() {
    return (
      <View style={FULL}>
        <Wallpaper />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Text style={TITLE_WRAPPER}>
            <Text style={TITLE} text="Your new app, " />
            <Text style={ALMOST} text="almost" />
            <Text style={TITLE} text="!" />
          </Text>
          <Image source={bowserLogo} style={BOWSER} />
          <Text style={CONTENT}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            This probably isn't what your app is going to look like. Unless your designer handed you
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            this screen and, in that case, congrats! You're ready to ship.
          </Text>
          <Text style={CONTENT}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            For everyone else, this is where you'll see a live preview of your fully functioning app
            using Ignite.
          </Text>
        </Screen>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}></View>
        </SafeAreaView>
      </View>
    )
  }
}
