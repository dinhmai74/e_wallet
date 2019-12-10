import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { Card, CardItem, Left, Right, Row } from "native-base"
import { RowText, Text, View } from "components"
import { color, spacing } from "theme"

interface Props {
  movieName: string
  time: string
  theaters: string
  room: string
  seats: string[]
}

export function InfoCard({ movieName, time, theaters, room, seats }: Props) {
  return (
    <Card style={styles.container}>
      <CardItem>
        <Text tx="trainTicket_ticketInfo" t1 bold />
      </CardItem>
      <CardItem style={{ flex: 1 }}>
        <RowText
          left="movie_name"
          right={movieName}
          leftColor={color.description}
          style={{ width: "100%" }}
        />
      </CardItem>

      <CardItem style={{ flex: 1 }}>
        <RowText
          left="movie_time"
          right={time}
          leftColor={color.description}
          style={{ width: "100%" }}
        />
      </CardItem>

      <CardItem style={{ flex: 1 }}>
        <RowText
          left="movie_theater"
          right={theaters}
          leftColor={color.description}
          style={{ width: "100%" }}
        />
      </CardItem>

      <CardItem style={{ flex: 1 }}>
        <RowText
          left="movie_room"
          right={room}
          leftColor={color.description}
          style={{ width: "100%" }}
        />
      </CardItem>

      <CardItem style={{ justifyContent: "space-between" }}>
        <Text tx="movie_seat" color={color.description} />
        <View preset="row">
          {seats.map((val, idx) => {
            return (
              <React.Fragment key={val}>
                <Text>
                  {val.toUpperCase()}
                  {idx <= val.length - 1 && ", "}
                </Text>
              </React.Fragment>
            )
          })}
        </View>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[4],
  },
})
