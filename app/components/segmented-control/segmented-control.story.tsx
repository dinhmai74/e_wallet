import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { SegmentedControl } from "./"

declare var module

storiesOf("SegmentedControl", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <SegmentedControl text="SegmentedControl" />
      </UseCase>
    </Story>
  ))