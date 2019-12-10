import React, { Component } from "react"
import { RowText, View, Text, SizedBox } from "components"
import { color } from "theme"

export interface TicketInfoProps {
  movieName: string
  time: string
  theater: string
  room: string
  seats: string[]
  cost: string
}

interface State {}

export const TicketInfo = (props: TicketInfoProps, state: State) => {
  const { seats, movieName, time, theater, room, cost } = props
  const space = 4
  return (
    <View>
      <RowText
        left="movie_name"
        right={movieName}
        leftColor={color.description}
        style={{ width: "100%" }}
      />
      <SizedBox h={space} />

      <RowText
        left="movie_time"
        right={time}
        leftColor={color.description}
        style={{ width: "100%" }}
      />
      <SizedBox h={space} />

      <RowText
        left="movie_theater"
        right={theater}
        leftColor={color.description}
        style={{ width: "100%" }}
      />
      <SizedBox h={space} />

      <RowText
        left="movie_room"
        right={room}
        leftColor={color.description}
        style={{ width: "100%" }}
      />
      <SizedBox h={space} />

      <View preset="row" style={{ justifyContent: "space-between" }}>
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
      </View>
    </View>
  )
}
