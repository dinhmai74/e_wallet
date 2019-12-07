import React, { useState } from "react"
import { MovieModel } from "components/buy-movie-ticket/hot-firm-card"
import { MovieTimePicker } from "components/buy-movie-ticket/movie-time-picker"
import { SizedBox, Text } from "components"
import { MoviePlaceRow } from "components/buy-movie-ticket/movie-place-row"
import moment, { Moment } from "moment"
import _ from "lodash"
import { defineObservableProperty } from "mobx/lib/types/observableobject"

interface Props {
  movie: MovieModel
}

export interface PlaceModel {
  id: string
  date: Moment[]
  place: string
}

export const placeData: PlaceModel[] = [
  {
    id: "53fb120b-14a9-49eb-b966-c7e5b1cb32a2",
    date: [moment(), moment().add(1, "days"), moment().add(2, "days")],
    place: "Nguyen Du",
  },
  {
    id: "e99ab361-5a81-4902-b2f2-88c662979606",
    date: [moment(), moment().add(1, "days"), moment().add(2, "days")],
    place: "Raymond Evans",
  },
  {
    id: "9d04cbd0-620f-4888-83aa-c60cb8b7ddd6",
    date: [moment(), moment().add(1, "days"), moment().add(2, "days")],
    place: "Samuel Bass",
  },
  {
    id: "ef186a84-b58b-41ec-90fa-5f52592dbd7b",
    date: [moment().add(1, "days"), moment().add(2, "days")],
    place: "Theresa Harrison",
  },
  {
    id: "06acb3d1-13bf-4f23-a7f0-4c95f9ae3364",
    date: [moment(), moment().add(3, "days")],
    place: "Amelia Perry ",
  },
  {
    id: "02fc037d-4907-43aa-8349-0d9486374f8e",
    date: [moment().add(4, "days"), moment().add(3, "days")],
    place: "Gabriel Gray",
  },
]

export const BuyMovieTicketShowTimeScreen = ({  }: Props) => {
  const [selectedDate, setSelectedDate] = useState(moment())

  const result = []
  placeData.forEach(place => {
    let inSelected = place.date.filter(d => moment(d).isSame(moment(selectedDate), "day"))
    console.tlog("inSelected", inSelected)
    if (inSelected.length > 0) result.push(place)
  })

  console.tlog("result", result)

  return (
    <>
      <MovieTimePicker
        onDateSelected={val => {
          setSelectedDate(val)
        }}
      />
      <Text tx="movie_place" />
      {result.map((p, idx) => {
        const { place, id } = p
        return (
          <React.Fragment key={idx}>
            <SizedBox h={4}/>
            <MoviePlaceRow title={place} id={id} onPress={id => {}} />
          </React.Fragment>
        )
      })}
      <SizedBox h={4}/>
    </>
  )
}
