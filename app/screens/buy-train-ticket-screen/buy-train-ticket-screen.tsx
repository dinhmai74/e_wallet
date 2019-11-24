import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import DateTimePicker from "react-native-modal-datetime-picker"
import { NavigationScreenProps } from "react-navigation"
import styled from "styled-components"
import * as Yup from "yup"
import { Card as NBCard, CardItem, Body, Left, Right, Row } from "native-base"
import { Formik, FormikProps } from "formik"
import { Icon } from "react-native-elements"
import Modal from "react-native-modal"
import { produce } from "immer"
import { TouchableOpacity } from "react-native-gesture-handler"
import moment from "moment"
import _ from "lodash"

import { Button, Checkbox, SizedBox, Text, Screen } from "components"
import { color, spacing, metrics } from "theme"
import { Header, View, Divider } from "components"
import { translate } from "i18n"
import StationModalContent from "./components/StationModalContent"
import RightItem from "./components/RightItem"
import LeftText from "./components/LeftText"
import CardItemWithModal from "screens/buy-train-ticket-screen/components/CardItemWithModal"
import TotalTicketModal from "screens/buy-train-ticket-screen/components/TotalTicketModal"

export interface BuyTrainTicketScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = { paddingHorizontal: spacing[6] }

const Card = styled(NBCard)`
  padding-vertical: ${spacing[4]}px;
`

const StyledChoseStationRow = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
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
    return moment(val).isValid()
  }),
  returnDate: Yup.string().test("chose return date", "notChose_returnDate", function(val) {
    if (this.parent.ticketType === TicketType.oneWay) return true
    return moment(val).isValid()
  }),
  totalTicket: Yup.object().test("chose totalTicket", "notChose_totalTicket", function(val) {
    console.tron.log(" val total", val)
    return val.adult > 0 || val.children > 0
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

export type TotalTicket = {
  adult: number
  children: number
}

interface TrainFormValues {
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
  ticketType: TicketType.oneWay,
  originStation: CHOSE_STATION,
  destinationStation: CHOSE_STATION,
  departDate: DEFAULT_DATE,
  returnDate: DEFAULT_DATE,
  totalTicket: {
    adult: 0,
    children: 0,
  },
  seatType: SeatType.standard,
}

interface State {
  modal: {
    originStation?: boolean
    destinationStation?: boolean
    departDate?: boolean
    returnDate?: boolean
    totalTicket?: boolean
  }
}

// @inject("mobxstuff")
@observer
export class BuyTrainTicketScreen extends React.Component<BuyTrainTicketScreenProps, State> {
  state = {
    modal: {
      originStation: false,
      destinationStation: false,
      departDate: false,
      returnDate: false,
      totalTicket: false,
    },
  }

  setFieldTouched = null

  onSubmit = (values: TrainFormValues) => {
    console.tron.log("values", values)
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

  renderChoseStation = ({ values, setFieldTouched }: FormikProps<TrainFormValues>) => {
    return (
      <Card>
        <CardItemWithModal
          leftTx="trainTicket_originStation"
          rightTx={values.originStation}
          onPress={this.changeModalState.bind(this, "originStation", setFieldTouched, true)}
        />

        <CardItemWithModal
          leftTx="trainTicket_destinationStation"
          rightTx={values.destinationStation}
          onPress={this.changeModalState.bind(this, "destinationStation", setFieldTouched, true)}
        />
      </Card>
    )
  }

  renderChoseDate = ({ values, setFieldTouched }: FormikProps<TrainFormValues>) => {
    let departDate = values.departDate
    let returnDate = values.returnDate
    if (moment(departDate).isValid()) departDate = moment(departDate).format("DD / MM / YYYY")
    if (moment(returnDate).isValid()) returnDate = moment(returnDate).format("DD / MM / YYYY")
    console.tron.log(" values ", values)
    return (
      <Card>
        <CardItemWithModal
          leftTx="trainTicket_departDate"
          rightTx={departDate}
          onPress={this.changeModalState.bind(this, "departDate", setFieldTouched, true)}
        />

        <CardItemWithModal
          leftTx="trainTicket_returnDate"
          rightTx={returnDate}
          onPress={this.changeModalState.bind(this, "returnDate", setFieldTouched, true)}
          disabled={values.ticketType == TicketType.oneWay}
        />
      </Card>
    )
  }

  renderChoseSeat = ({ values, setFieldValue, setFieldTouched }: FormikProps<TrainFormValues>) => {
    let totalTicket = "trainTicket_amount"
    if (values.totalTicket.adult > 0 || values.totalTicket.children > 0) {
      totalTicket = `${values.totalTicket.adult} Adult - ${values.totalTicket.children} Children`
    }
    return (
      <Card>
        <CardItemWithModal
          leftTx={"trainTicket_totalTicket"}
          rightTx={totalTicket}
          onPress={this.changeModalState.bind(this, "totalTicket", setFieldTouched, true)}
        />
        <CardItem>
          <LeftText tx="trainTicket_seatType" />

          <Right>
            <Row>
              <Checkbox
                tx="trainTicket_standard"
                value={values.seatType === SeatType.standard}
                onToggle={val => setFieldValue("seatType", SeatType.standard)}
              />
              <SizedBox w={4} />
              <Checkbox
                tx="trainTicket_firstClass"
                value={values.seatType === SeatType.firstClass}
                onToggle={val => setFieldValue("seatType", SeatType.firstClass)}
              />
            </Row>
          </Right>
        </CardItem>
      </Card>
    )
  }

  renderForm = (formikBag: FormikProps<TrainFormValues>) => {
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

  changeModalState = (modal: string, setFieldTouched, val: boolean = true) => {
    setFieldTouched(modal, true)
    this.setState(preState => {
      return produce(preState, stateCopy => {
        stateCopy.modal[modal] = val
      })
    })
  }

  submitTotalTicketValue = (setFieldValue, setFieldTouched, val) => {
    this.changeModalState("totalTicket", setFieldTouched, false)
    setFieldValue("totalTicket", val)
  }

  renderModals = ({ setFieldTouched, values, setFieldValue }: FormikProps<TrainFormValues>) => {
    const { modal } = this.state
    return (
      <>
        <Modal
          isVisible={modal.originStation}
          onBackdropPress={this.changeModalState.bind(
            this,
            "originStation",
            setFieldTouched,
            false,
          )}
          onBackButtonPress={this.changeModalState.bind(
            this,
            "originStation",
            setFieldTouched,
            false,
          )}
        >
          <StationModalContent
            selectedVal={values.originStation}
            onPress={val => {
              this.changeModalState("originStation", setFieldTouched, false)
              setFieldValue("originStation", val)
            }}
          />
        </Modal>

        <Modal
          isVisible={modal.destinationStation}
          onBackdropPress={this.changeModalState.bind(
            this,
            "destinationStation",
            setFieldTouched,
            false,
          )}
          onBackButtonPress={this.changeModalState.bind(
            this,
            "destinationStation",
            setFieldTouched,
            false,
          )}
        >
          <StationModalContent
            selectedVal={values.destinationStation}
            onPress={val => {
              this.changeModalState("destinationStation", setFieldTouched, false)
              setFieldValue("destinationStation", val)
            }}
          />
        </Modal>

        <DateTimePicker
          isVisible={modal.departDate}
          onConfirm={date => {
            setFieldValue("departDate", date)
            this.changeModalState("departDate", setFieldTouched, false)
          }}
          onCancel={this.changeModalState.bind(this, "departDate", setFieldTouched, false)}
        />

        <DateTimePicker
          isVisible={modal.returnDate}
          onConfirm={date => {
            setFieldValue("returnDate", date)
            this.changeModalState("returnDate", false)
          }}
          onCancel={this.changeModalState.bind(this, "returnDate", setFieldTouched, false)}
        />

        <TotalTicketModal
          isVisible={modal.totalTicket}
          onBackdropPress={this.changeModalState.bind(this, "totalTicket", setFieldTouched, false)}
          onBackButtonPress={this.changeModalState.bind(
            this,
            "totalTicket",
            setFieldTouched,
            false,
          )}
          value={values.totalTicket}
          onSubmit={val => {
            this.submitTotalTicketValue(setFieldValue, setFieldTouched, val)
          }}
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
          {(bag: FormikProps<TrainFormValues>) => {
            const { isSubmitting, errors, touched, setFieldTouched } = bag

            if (!this.setFieldTouched) this.setFieldTouched = this.setFieldTouched

            let disabled = !_.isEmpty(errors) || _.isEmpty(touched) || isSubmitting
            return (
              <Screen>
                <Screen transparent preset="scroll" style={ROOT}>
                  {this.renderForm(bag)}
                </Screen>

                <Button
                  tx="confirm"
                  primary
                  full
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
