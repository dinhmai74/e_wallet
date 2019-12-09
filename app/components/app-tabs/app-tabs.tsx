import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../text"
import { Icon, Tab, TabHeading, Tabs } from "native-base"

export interface AppTabsProps {}

export function AppTabs(props: AppTabsProps) {
  return (
    <Tabs tabBarUnderlineStyle={{ height: 1.5 }}>
      <Tab
        heading={
          <TabHeading>
            <Icon name="camera" />
            <Text>Camera</Text>
          </TabHeading>
        }
      ></Tab>
      <Tab
        heading={
          <TabHeading>
            <Text>No Icon</Text>
          </TabHeading>
        }
      ></Tab>
      <Tab
        heading={
          <TabHeading>
            <Icon name="apps" />
          </TabHeading>
        }
      ></Tab>
    </Tabs>
  )
}
