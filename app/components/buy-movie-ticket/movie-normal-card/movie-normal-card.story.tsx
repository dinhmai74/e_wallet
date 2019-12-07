import * as React from "react"
import { storiesOf } from "@storybook/react-native"
// @ts-ignore
import { StoryScreen, Story, UseCase } from "storybook/views"
// @ts-ignore
import { MovieNormalCard } from "app/components/buy-movie-ticket/movie-normal-card/index"
import { icons } from "components"
import { Card } from "native-base"
import { spacing } from "theme"

declare var module

storiesOf("MovieNormalCard", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Have divider", () => (
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
      <UseCase text="inside card" usage="The primary.">
        <Card style={{padding: spacing[2]}}>
          <MovieNormalCard
            id={"0"}
            digitalType={0}
            dimensionType={"2D"}
            releaseDate={"12/11/2019"}
            source={icons.avtNextThreeDays}
            stars={7.5}
            duration={180}
            title={"The Next trhee days"}
            haveDivider={false}
          />
        </Card>
      </UseCase>
    </Story>
  ))
