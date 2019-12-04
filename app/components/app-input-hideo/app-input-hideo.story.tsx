import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { AppInputHideo } from "./"

declare var module

storiesOf("AppInputHideo", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <AppInputHideo onChangeText={val=>console.tron.log('change val', val)} />
      </UseCase>
    </Story>
  ))
