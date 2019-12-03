import React, { useState } from "react"
import { TrainTicketValueWithPos } from "screens/buy-train-ticket/fill-info-screen"
import { Card, CardItem } from "native-base"
import { Icon, Text, View, SizedBox } from "components"
import { buyTrainTimeData } from "screens/buy-train-ticket/chose-time-screen"

interface Props {
  data: TrainTicketValueWithPos
}

export const TrainInfoCard = ({ data }: Props) => {
  const { destinationStation, originStation, selectedTrainId } = data

  const trainTimeInfo = buyTrainTimeData.filter(val => val.id === selectedTrainId)
  const { time, id, number } = trainTimeInfo[0]

  return (
    <Card>
      <SizedBox h={4} />
      <CardItem>
        <Icon icon={"calendar"} />
        <SizedBox h={1} w={2} />
        <Text text={`${time}`} />
      </CardItem>

      <CardItem>
        <Text text={`Train: ${number}`} />
      </CardItem>

      <CardItem>
        <Icon icon="train" />
        <SizedBox h={1} w={2} />
        <Text text={originStation} />
        <SizedBox h={1} w={2} />
        <Icon icon="iconLongRightArrow" />
        <SizedBox h={1} w={2} />
        <Text text={destinationStation} />
      </CardItem>
      <SizedBox h={4} />
    </Card>
  )
}
