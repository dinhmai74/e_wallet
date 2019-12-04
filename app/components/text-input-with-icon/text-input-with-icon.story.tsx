import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { TextInputWithIcon } from "./"

declare var module

storiesOf("TextInputWithIcon", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <TextInputWithIcon placeholder="TextInputWithIcon" icon={"user"} iconType={"AntDesign"} />
      </UseCase>
    </Story>
  ))
