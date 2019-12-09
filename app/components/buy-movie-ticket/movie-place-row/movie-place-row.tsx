import * as React from "react"
import { View, Text, Divider, Icon, SizedBox } from "components"
import { StyleSheet, TouchableOpacity } from "react-native"
import { color, color as colors, metrics, spacing } from "theme"
import { useState } from "react"
import { MovieTimeModel } from "screens/buy-movie-ticket/MovieData"

export interface MoviePlaceRowProps {
  title: string
  id: string
  onPress: (id: string, movieTimeId: string) => void
  times: MovieTimeModel[]
}

import styled from "styled-components"
import moment from "moment"

const DescriptionText = styled(Text)`
  color: ${color.description};
  flex: 1;
`

export function MoviePlaceRow(props: MoviePlaceRowProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { title, onPress, id, times } = props

  const color = colors.description
  const icon = !isCollapsed ? "iconArrowRight" : "iconExpandArrow"

  function renderCollapseContent() {
    return (
      <>
        {times.map(val => {
          const { time, roomName } = val
          console.tlog("val", val)
          return (
            <React.Fragment key={val.id}>
              <TouchableOpacity onPress={() => onPress(id, val.id)}>
                <View preset={"row"} style={styles.roomRow}>
                  <DescriptionText text={roomName + "   -   "} />
                  <DescriptionText text={moment(time).format("HH: MM")} />
                </View>
                <Divider />
              </TouchableOpacity>
            </React.Fragment>
          )
        })}
      </>
    )
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setIsCollapsed(pre => !pre)}>
        <View preset={"row"} style={styles.rowWrapper}>
          <Text color={color} text={title} />
          <Icon icon={icon} color={color} size={metrics.icon.tiny} />
        </View>
      </TouchableOpacity>
      {isCollapsed && renderCollapseContent()}

      <SizedBox h={2} />
      {!isCollapsed && <Divider color={color} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  rowWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: spacing[2],
    alignItems: "center",
  },
  roomRow: {
    marginHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
})
