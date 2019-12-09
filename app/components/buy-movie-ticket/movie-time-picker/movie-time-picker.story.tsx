import * as React from "react"
import { storiesOf } from "@storybook/react-native"
// @ts-ignore
import { StoryScreen, Story, UseCase } from "storybook/views"
import { MovieTimePicker } from "./movie-time-picker"

declare var module

storiesOf("MovieTimePicker", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <MovieTimePicker />
      </UseCase>
    </Story>
  ))
