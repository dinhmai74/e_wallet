import * as React from "react"
import { storiesOf } from "@storybook/react-native"
// @ts-ignore
import { StoryScreen, Story, UseCase } from "storybook/views"
// @ts-ignore
import { MovieNormalCard } from "app/components/buy-movie-ticket/movie-normal-card/index"
import { icons } from "components"

declare var module

storiesOf("MovieNormalCard", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <MovieNormalCard
          id={"0"}
          digitalType={0}
          dimensionType={"2D"}
          releaseDate={"12/11/2019"}
          source={icons.avtNextThreeDays}
          stars={7.5}
          duration={180}
          title={"The Next trhee days"}
        />
      </UseCase>
    </Story>
  ))
