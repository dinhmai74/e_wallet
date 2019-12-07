import React, { useState } from "react"
import { Text, View } from "react-native"
import { MovieInfoText } from "components/buy-movie-ticket/movie-info-text"
import { MovieModel } from "components/buy-movie-ticket/hot-firm-card"
import { SizedBox } from "components"
import { translate } from "i18n"
import { color } from "theme"

interface Props {
  movie: MovieModel
}

export const BuyMovieTicketInfoScreen = ({ movie }: Props) => {
  const { cast, director } = movie
  return (
    <>
      <SizedBox h={4} />
      <MovieInfoText
        description={director}
        title={translate("movie_director")}
        descriptionColor={color.textNavy}
      />
      <SizedBox h={4} />
      <MovieInfoText description={cast} title={translate("movie_cast")} />
    </>
  )
}
