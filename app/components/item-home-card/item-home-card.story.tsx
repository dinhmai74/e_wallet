import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { ItemHomeCard } from "./"
import { Card } from "native-base"
import NewsCard from "components/news-card/news-card"

declare var module

storiesOf("ItemHomeCard", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <Card>
          {/* <ItemHomeCard icon="rechargeMobile" tx="reCharge_mobile" onPress={() => {}} /> */}
          <NewsCard title="beefRepices" subTitle="ahihi" number="numberTest" time = "times" icon="iconFoward"/>
        </Card>
      </UseCase>
    </Story>
  ))
