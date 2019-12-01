import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { TextWithDecoration } from "./"

declare var module

storiesOf("TextWithDecoration", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <TextWithDecoration tx="buyTrainTicketChoseTimeScreen_header" />
      </UseCase>
    </Story>
  ))
