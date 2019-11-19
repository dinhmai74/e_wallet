import React, { useState } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Right } from "native-base"
import { Text } from "components"
import styled from "styled-components"
import { Icon } from "react-native-elements"
import { color, metrics } from "theme"

const StyledChoseStationRow = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`

interface Props {
  tx: string
  onPress?: (id: string, val: boolean) => void
}

export function RightItem({ tx, onPress }: Props) {
  return (
    <Right>
      <StyledChoseStationRow onPress={onPress}>
        <Text
          b2
          color={color.textDescription}
          // @ts-ignore
          tx={tx}
        />
        <Icon
          size={metrics.icon.tiny}
          name="chevron-thin-right"
          type="entypo"
          color={color.textDescription}
        />
      </StyledChoseStationRow>
    </Right>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default RightItem
