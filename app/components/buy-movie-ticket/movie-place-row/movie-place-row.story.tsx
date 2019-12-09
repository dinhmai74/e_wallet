import * as React from "react"
import { storiesOf } from "@storybook/react-native"
// @ts-ignore
import { StoryScreen, Story, UseCase } from "storybook/views"
import { MoviePlaceRow } from "components/buy-movie-ticket/movie-place-row/movie-place-row"

declare var module

storiesOf("MoviePlaceRow", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <MoviePlaceRow
          // @ts-ignore
          onPress={() => alert("123")}
          id={"64c12e38-e962-42e6-ac5b-e5c80735195e"}
          title={"nguyen du"}
         times={[]}/>
      </UseCase>
    </Story>
  ))
