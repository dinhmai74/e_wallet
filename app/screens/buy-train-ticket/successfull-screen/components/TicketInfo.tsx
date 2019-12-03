import React, { useState } from "react"
import { TextWithDecoration } from "components/text-with-decoration"
import { RowText, Screen, SizedBox, Text } from "components"
import { buyTrainTimeData, TicketType, TrainTicketValueWithPos } from "screens/buy-train-ticket"
import { formatMoney } from "utils"
import { color } from "theme"

interface Props {
  ticketInfo: TrainTicketValueWithPos
  passengerCounts: number
}

let names: string[] =[]

const StyledRowText=(props)=> <RowText leftColor={color.description} {...props}/>

export const TicketInfo = ({ ticketInfo, passengerCounts }: Props) => {
  const {
    selectedTrainId,
    ticketType,
    seatType,
    returnDate,
    originStation,
    destinationStation,
    departDate,
    seatVal,
    totalTicket,
  } = ticketInfo


  const trainTimeInfo = buyTrainTimeData.filter(val => val.id === selectedTrainId)
  const { time, id, number } = trainTimeInfo[0]

  return (
    <>
      <TextWithDecoration tx={"trainTicket_ticketInfo"} />
      <SizedBox h={3} />
      <StyledRowText left={"common_type"} right={TicketType[ticketType]} />
      <SizedBox h={2} />
      <StyledRowText left={"common_timeStart"} right={time} />
      <SizedBox h={2} />
      <StyledRowText left={"common_trainNumber"} right={number} />
      <SizedBox h={2} />
      <StyledRowText left={"total"} right={formatMoney(passengerCounts*300000,0)+ "d"} />
    </>
  )
}

export default TicketInfo
