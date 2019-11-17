import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Button, Checkbox, SizedBox, Text, Screen } from "components"
import { color, spacing, metrics } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { Header, View } from "components"
import { Card as NBCard, CardItem, Body, Left, Right, Row } from "native-base"
import { Formik, FormikProps } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import { Icon } from "react-native-elements"
import { translate } from "i18n"

export interface BuyTrainTicketScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = { paddingHorizontal: spacing[6] }

const Card = styled(NBCard)`
  padding-vertical: ${spacing[4]}px;
`

const validationSchema = Yup.object().shape({
  originStation: Yup.string().test("passwords-match", "notChose", function(value) {
    return value !== CHOSE_STATION
  }),
})

enum TicketType {
  oneWay,
  roundTrip,
}

enum SeatType {
  standard,
  firstClass,
}

interface FormValues {
  ticketType: TicketType
  originStation: string
  destinationStation: string
  departDate: string
  returnDate: string
  totalTicket: string
  seatType: SeatType
}

const CHOSE_STATION = "trainTicket_choseStation"
const DEFAULT_DATE = "trainTicket_ddMMYYYY"

const initVal: FormValues = {
  ticketType: TicketType.oneWay,
  originStation: CHOSE_STATION,
  destinationStation: CHOSE_STATION,
  departDate: DEFAULT_DATE,
  returnDate: DEFAULT_DATE,
  totalTicket: "trainTicket_amount",
  seatType: SeatType.standard,
}

// @inject("mobxstuff")
@observer
export class BuyTrainTicketScreen extends React.Component<BuyTrainTicketScreenProps, {}> {
  onSubmit = (values: FormValues) => {
    console.tron.log("values", values)
  }

  renderIconRightArrow = () => (
    <Icon
      size={metrics.icon.tiny}
      name="chevron-thin-right"
      type="entypo"
      color={color.textDescription}
    />
  )

  /* ------------- render ------------- */
  renderChoseType = ({ values, setFieldValue }: FormikProps<FormValues>) => {
    return (
      <Card>
        <CardItem>
          <Left>
            <Text b1 color={color.textNavy} tx="trainTicket_type" />
          </Left>
          <Right>
            <Row>
              <Checkbox
                tx="trainTicket_oneWay"
                value={values.ticketType === TicketType.oneWay}
                onToggle={val => setFieldValue("ticketType", TicketType.oneWay)}
              />
              <SizedBox w={4} />
              <Checkbox
                tx="trainTicket_roundTrip"
                value={values.ticketType === TicketType.roundTrip}
                onToggle={val => setFieldValue("ticketType", TicketType.roundTrip)}
              />
            </Row>
          </Right>
        </CardItem>
      </Card>
    )
  }

  renderChoseStation = ({ values }: FormikProps<FormValues>) => {
    return (
      <Card>
        <CardItem style={{ justifyContent: "space-between" }}>
          <Left>
            <Text preset="b2" tx="trainTicket_originStation" />
          </Left>
          <Right>
            <Row style={{ alignItems: "center" }}>
              <Text
                b2
                color={color.textDescription}
                // @ts-ignore
                tx={values.originStation}
              />
              {this.renderIconRightArrow()}
            </Row>
          </Right>
        </CardItem>

        <CardItem style={{ justifyContent: "space-between" }}>
          <Left>
            <Text preset="b2" tx="trainTicket_destinationStation" />
          </Left>
          <Right>
            <Row style={{ alignItems: "center" }}>
              <Text
                b2
                color={color.textDescription}
                // @ts-ignore
                tx={values.originStation}
              />
              {this.renderIconRightArrow()}
            </Row>
          </Right>
        </CardItem>
      </Card>
    )
  }

  renderChoseDate = ({ values }: FormikProps<FormValues>) => {
    return (
      <Card>
        <CardItem>
          <Left>
            <Text tx="trainTicket_departDate" b2 />
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Text tx="trainTicket_returnDate" b2 />
          </Left>
        </CardItem>
      </Card>
    )
  }

  renderChoseSeat = ({ values }: FormikProps<FormValues>) => {
    return (
      <Card>
        <CardItem>
          <Left>
            <Text tx="trainTicket_totalTicket" b2 />
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Text tx="trainTicket_seatType" b2 />
          </Left>
        </CardItem>
      </Card>
    )
  }

  renderForm = (formikBag: FormikProps<FormValues>) => {
    console.tron.log(" formikBag.values ", formikBag.values)
    return (
      <>
        {this.renderChoseType(formikBag)}
        <SizedBox h={5} />
        {this.renderChoseStation(formikBag)}
        <SizedBox h={5} />
        {this.renderChoseDate(formikBag)}
        <SizedBox h={5} />
        {this.renderChoseSeat(formikBag)}
        <SizedBox h={5} />
        <Text
          tx="trainTicket_note"
          b2
          fontType="italic"
          color={color.textDescription}
          style={{ textAlign: "center", paddingHorizontal: spacing[4] }}
        />
      </>
    )
  }

  render() {
    return (
      <View full>
        <Header headerTx="trainTicket_title" leftIcon="back" />
        <SizedBox h={6} />
        <Formik
          initialValues={initVal}
          validationSchema={validationSchema}
          onSubmit={this.onSubmit}
        >
          {(bag: FormikProps<FormValues>) => {
            const { isSubmitting, errors } = bag

            console.tron.log(" errors ", errors)
            return (
              <Screen style={ROOT}>
                <Screen preset="scroll">{this.renderForm(bag)}</Screen>

                <Button
                  tx="confirm"
                  primary
                  full
                  disabled={true}
                  onPress={bag.handleSubmit}
                  style={{ marginBottom: spacing[4] }}
                />
              </Screen>
            )
          }}
        </Formik>
      </View>
    )
  }
}
