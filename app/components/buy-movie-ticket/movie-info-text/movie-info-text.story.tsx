import * as React from "react"
import { storiesOf } from "@storybook/react-native"
// @ts-ignore
import { StoryScreen, Story, UseCase } from "storybook/views"
import { MovieInfoText } from "components/buy-movie-ticket/movie-info-text/index"

declare var module

storiesOf("MovieInfoText", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <MovieInfoText
          title={"Cast"}
          description={
            "Linda Hamilton, Arnold Schwarzenegger, Mackenzie Davis, Gabriel Luna, Natalia Reyes, Diego Boneta"
          }
        />
      </UseCase>
    </Story>
  ))
