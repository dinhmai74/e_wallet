import React from "react"
import { Card, CardItem } from "native-base"
import _ from "lodash"

import { Divider, Icon, Text, SizedBox, TotalRow } from "components"
import { TrainTicketValueWithPos, InfoFormVal } from "screens/buy-train-ticket/fill-info-screen"
import { buyTrainTimeData } from "screens/buy-train-ticket/chose-time-screen"
import { spacing } from "theme"

interface Props {
  ticketInfo: TrainTicketValueWithPos
  passengerInfo: InfoFormVal
}

export function InfoCard({ passengerInfo, ticketInfo }: Props) {
  const { selectedTrainId } = ticketInfo
  console.tlog("passengerInfo: ", passengerInfo)

  const trainTimeInfo = buyTrainTimeData.filter(val => val.id === selectedTrainId)
  const { time, number } = trainTimeInfo[0]

  return (
    <Card>
      <SizedBox h={4} />
      <CardItem>
        <Icon icon={"calendar"} />
        <SizedBox h={1} w={2} />
        <Text text={`${time}`} />
      </CardItem>

      <CardItem>
        <Text text={`Train : ${number}`} />
      </CardItem>
      <SizedBox h={2} />
      <Divider style={{ marginHorizontal: spacing[4] }} />
      <SizedBox h={2} />
      {_.map(passengerInfo.passengers, (passenger, idx) => {
        return (
          <React.Fragment key={idx}>
            <CardItem>
              <TotalRow value="300000" leftTx={`Seat : ${idx}`} />
            </CardItem>
            <SizedBox h={4} />
          </React.Fragment>
        )
      })}
    </Card>
  )
}

export default InfoCard
