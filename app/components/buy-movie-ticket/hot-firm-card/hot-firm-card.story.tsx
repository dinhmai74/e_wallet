import * as React from "react"
import { storiesOf } from "@storybook/react-native"
// @ts-ignore
import { StoryScreen, Story, UseCase } from "storybook/views"
import { HotFirmCard } from "./hot-firm-card"

declare var module

storiesOf("HotFirmCard", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <HotFirmCard />
      </UseCase>
    </Story>
  ))
