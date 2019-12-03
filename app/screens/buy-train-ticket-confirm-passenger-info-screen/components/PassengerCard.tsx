import React from "react"
import _ from "lodash"
import { TextWithDecoration } from "components/text-with-decoration"
import { Card } from "native-base"
import CardItemWithText from "screens/buy-train-ticket-fill-info-screen/components/CardItemWithText"
import { InfoFormVal } from "screens/buy-train-ticket-fill-info-screen"
import { SizedBox } from "components"

interface Props {
  data: InfoFormVal
}

export const PassengerCard = ({ data }: Props) => {
  const { passengers } = data
  return (
    <>
      <TextWithDecoration tx="trainTicket_passengersInfo" />
      <SizedBox h={5} />

      {_.map(passengers, (d, idx) => {
        return (
          <React.Fragment key={idx}>
            <Card>
              <CardItemWithText left="common_name" right={d.name} />
              <CardItemWithText left={`Seat ${idx}`} right={"300.000d"} />
              <CardItemWithText left="common_passport" right={d.passport} />
            </Card>
            <SizedBox h={5} />
          </React.Fragment>
        )
      })}
    </>
  )
}
