import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Card } from "./"
import { View } from "components"

declare var module

storiesOf("Card", module)
  .add("Style Presets", () => (
    <View full style={{justifyContent: "center"}}>
      <Card text="Card" />
    </View>
  ))
