import * as React from "react"
import { ViewStyle } from "react-native"
import DateTimePicker from "react-native-modal-datetime-picker"
import { NavigationScreenProps } from "react-navigation"
import styled from "styled-components"
import * as Yup from "yup"
import { Card as NBCard, CardItem, Right, Row } from "native-base"
import { Formik, FormikProps } from "formik"
import Modal from "react-native-modal"
import { produce } from "immer"
import moment from "moment"
import _ from "lodash"

import { Button, Checkbox, SizedBox, Text, Screen } from "components"
import { color, spacing } from "theme"
import { Header, View } from "components"
import StationModalContent from "./components/StationModalContent"
import LeftText from "./components/LeftText"
import CardItemWithModal from "screens/buy-train-ticket-screen/components/CardItemWithModal"
import TotalTicketModal from "screens/buy-train-ticket-screen/components/TotalTicketModal"
import { navigateService } from "utils"

export interface BuyTrainTicketScreenProps extends NavigationScreenProps<{}> {}

const FORMAT_DATE = "DD / MM / YYYY"

const ROOT: ViewStyle = { paddingHorizontal: spacing[6] }

const Card = styled(NBCard)`
  padding-vertical: ${spacing[4]}px;
`

const validationSchema = Yup.object().shape({
  originStation: Yup.string().test("chose originStation", "notChose_originStation", function(
    value,
  ) {
    return value !== CHOSE_STATION
  }),
  destinationStation: Yup.string().test(
    "chose destinationStation",
    "notChose_DesinationStation",
    function(value) {
      return value !== CHOSE_STATION
    },
  ),
  departDate: Yup.string().test("chose departDate", "notChose_departDate", function(val) {
    return true
    // return moment(val).isValid()
  }),
  returnDate: Yup.string().test("chose return date", "notChose_returnDate", function(val) {
    return true
    // if (this.parent.ticketType === TicketType.oneWay) return true
    // return moment(val).isValid()
  }),
  totalTicket: Yup.object().test("chose totalTicket", "notChose_totalTicket", function(val) {
    return val.adult > 0 || val.children > 0
  }),
})

export enum TicketType {
  oneWay,
  roundTrip,
}

enum SeatType {
  standard = 1,
  firstClass = 1.5,
}

export type TotalTicket = {
  adult: number
  children: number
}

export interface TrainFormValues {
  ticketType: TicketType
  originStation: string
  destinationStation: string
  departDate: string
  returnDate: string
  totalTicket: TotalTicket
  seatType: SeatType
}

const CHOSE_STATION = "trainTicket_choseStation"
const DEFAULT_DATE = "trainTicket_ddMMYYYY"

const initVal: TrainFormValues = {
  ticketType: 0,
  originStation: CHOSE_STATION,
  destinationStation: CHOSE_STATION,
  departDate: undefined,
  returnDate: undefined,
  totalTicket: {
    adult: 0,
    children: 0,
  },
  seatType: SeatType.standard,
}

const initErr = {
  ticketType: false,
  originStation: true,
  destinationStation: true,
  departDate: true,
  returnDate: false,
  totalTicket: true,
  seatType: false,
}

interface State {
  modal: {
    originStation?: boolean
    destinationStation?: boolean
    departDate?: boolean
    returnDate?: boolean
    totalTicket?: boolean
  }
  loading: boolean
}

export class BuyTrainTicketScreen extends React.Component<BuyTrainTicketScreenProps, State> {
  state = {
    modal: {
      originStation: false,
      destinationStation: false,
      departDate: false,
      returnDate: false,
      totalTicket: false,
    },
    loading: false,
  }

  setFieldTouched = null

  onSubmit = (val, bag: FormikProps<TrainFormValues>) => {
    this.setState({
      loading: true,
    })

    setTimeout(() => {
      this.setState(
        {
          loading: false,
        },
        () => {
          navigateService.navigate("BuyTrainTicketSelectPosScreen", { formVal: val })
        },
      )
    }, 2000)
  }

  /* ------------- render ------------- */
  renderChoseType = ({ values, setFieldValue, setFieldTouched }: FormikProps<TrainFormValues>) => {
    return (
      <Card>
        <CardItem>
          <LeftText tx="trainTicket_type" />
          <Right>
            <Row>
              <Checkbox
                tx="trainTicket_oneWay"
                value={values.ticketType === TicketType.oneWay}
                onToggle={val => {
                  setFieldValue("ticketType", TicketType.oneWay)
                  setFieldTouched("ticketType", true)
                }}
              />
              <SizedBox w={4} />
              <Checkbox
                tx="trainTicket_roundTrip"
                value={values.ticketType === TicketType.roundTrip}
                onToggle={val => {
                  setFieldValue("ticketType", TicketType.roundTrip)
                  setFieldTouched("ticketType", true)
                }}
              />
            </Row>
          </Right>
        </CardItem>
      </Card>
    )
  }

  renderChoseStation = ({ values }: FormikProps<TrainFormValues>) => {
    return (
      <Card>
        <CardItemWithModal
          leftTx="trainTicket_originStation"
          rightTx={values.originStation}
          onPress={this.changeModalState.bind(this, "originStation", true)}
        />

        <CardItemWithModal
          leftTx="trainTicket_destinationStation"
          rightTx={values.destinationStation}
          onPress={this.changeModalState.bind(this, "destinationStation", true)}
        />
      </Card>
    )
  }

  renderChoseDate = ({ values }: FormikProps<TrainFormValues>) => {
    let departDate =
      values.departDate === undefined ? DEFAULT_DATE : moment(values.departDate).format(FORMAT_DATE)
    let returnDate =
      values.returnDate === undefined ? DEFAULT_DATE : moment(values.returnDate).format(FORMAT_DATE)
    return (
      <Card>
        <CardItemWithModal
          leftTx="trainTicket_departDate"
          rightTx={departDate}
          onPress={this.changeModalState.bind(this, "departDate", true)}
        />

        <CardItemWithModal
          leftTx="trainTicket_returnDate"
          rightTx={returnDate}
          onPress={this.changeModalState.bind(this, "returnDate", true)}
          disabled={values.ticketType == TicketType.oneWay}
        />
      </Card>
    )
  }

  renderChoseSeat = ({ values, setFieldValue }: FormikProps<TrainFormValues>) => {
    let totalTicket = "trainTicket_amount"
    if (values.totalTicket.adult > 0 || values.totalTicket.children > 0) {
      totalTicket = `${values.totalTicket.adult} Adult - ${values.totalTicket.children} Children`
    }
    return (
      <Card>
        <CardItemWithModal
          leftTx={"trainTicket_totalTicket"}
          rightTx={totalTicket}
          onPress={this.changeModalState.bind(this, "totalTicket", true)}
        />
        <CardItem>
          <LeftText tx="trainTicket_seatType" />

          <Right>
            <Row>
              <Checkbox
                tx="trainTicket_standard"
                value={values.seatType === SeatType.standard}
                onToggle={() => setFieldValue("seatType", SeatType.standard)}
              />
              <SizedBox w={4} />
              <Checkbox
                tx="trainTicket_firstClass"
                value={values.seatType === SeatType.firstClass}
                onToggle={() => setFieldValue("seatType", SeatType.firstClass)}
              />
            </Row>
          </Right>
        </CardItem>
      </Card>
    )
  }

  renderForm = (formikBag: FormikProps<TrainFormValues>) => {
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

  changeModalState = (modal: string, val: boolean = true) => {
    this.setState(preState => {
      return produce(preState, stateCopy => {
        stateCopy.modal[modal] = val
      })
    })
  }

  submitTotalTicketValue = (val, setFieldValue) => {
    this.changeModalState("totalTicket", false)
    setFieldValue("totalTicket", val)
  }

  renderModals = ({ values, setFieldValue }: FormikProps<TrainFormValues>) => {
    const { modal } = this.state
    return (
      <>
        <Modal
          isVisible={modal.originStation}
          onBackdropPress={this.changeModalState.bind(this, "originStation", false)}
          onBackButtonPress={this.changeModalState.bind(this, "originStation", false)}
        >
          <StationModalContent
            selectedVal={values.originStation}
            onPress={val => {
              this.changeModalState("originStation", false)
              setFieldValue("originStation", val)
            }}
          />
        </Modal>

        <Modal
          isVisible={modal.destinationStation}
          onBackdropPress={this.changeModalState.bind(this, "destinationStation", false)}
          onBackButtonPress={this.changeModalState.bind(this, "destinationStation", false)}
        >
          <StationModalContent
            selectedVal={values.destinationStation}
            onPress={val => {
              this.changeModalState("destinationStation", false)
              setFieldValue("destinationStation", val)
            }}
          />
        </Modal>

        <DateTimePicker
          isVisible={modal.departDate}
          onConfirm={date => {
            setFieldValue("departDate", new Date(date))
            this.changeModalState("departDate", false)
          }}
          onCancel={this.changeModalState.bind(this, "departDate", false)}
        />

        <DateTimePicker
          isVisible={modal.returnDate}
          onConfirm={date => {
            setFieldValue("returnDate", new Date(date))
            this.changeModalState("returnDate", false)
          }}
          onCancel={this.changeModalState.bind(this, "returnDate", false)}
        />

        <TotalTicketModal
          isVisible={modal.totalTicket}
          onBackdropPress={this.changeModalState.bind(this, "totalTicket", false)}
          onBackButtonPress={this.changeModalState.bind(this, "totalTicket", false)}
          value={values.totalTicket}
          onSubmit={val => {
            this.submitTotalTicketValue(val, setFieldValue)
          }}
        />
      </>
    )
  }

  render() {
    console.tron.log("this.props", this.props)
    return (
      <View full>
        <Header headerTx="trainTicket_title" leftIcon="back" />
        <Formik
          initialValues={initVal}
          // @ts-ignore
          initialErrors={initErr}
          validationSchema={validationSchema}
          onSubmit={this.onSubmit}
        >
          {(bag: FormikProps<TrainFormValues>) => {
            const { isSubmitting, errors } = bag

            let disabled = !_.isEmpty(errors) || isSubmitting || this.state.loading
            return (
              <Screen>
                <SizedBox h={6} />
                <Screen transparent preset="scroll" style={ROOT}>
                  {this.renderForm(bag)}
                </Screen>

                <Button
                  tx="confirm"
                  primary
                  full
                  loading={this.state.loading}
                  disabled={disabled}
                  onPress={bag.handleSubmit}
                  style={{ marginHorizontal: spacing[6], marginBottom: spacing[3] }}
                />
                {this.renderModals(bag)}
              </Screen>
            )
          }}
        </Formik>
      </View>
    )
  }
}
