import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Button, Checkbox, SizedBox, Text, Screen } from "components"
import { color, spacing, metrics } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { Header, View, Divider } from "components"
import Modal from "react-native-modal"
import { Card as NBCard, CardItem, Body, Left, Right, Row } from "native-base"
import { Formik, FormikProps } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import { Icon } from "react-native-elements"
import { translate } from "i18n"
import StationModalContent from "./components/StationModalContent"
import RightItem from "./components/RightItem"
import LeftText from "./components/LeftText"
import { TouchableOpacity } from "react-native-gesture-handler"
import { produce } from "immer"
import CardItemWithModal from "screens/buy-train-ticket-screen/components/CardItemWithModal"

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
          <LeftText tx="trainTicket_type" />
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

  renderChoseDate = ({ values }: FormikProps<FormValues>) => {
    return (
      <Card>
        <CardItemWithModal
          leftTx="trainTicket_departDate"
          rightTx={values.departDate}
          onPress={this.changeModalState.bind(this, "departDate", true)}
        />

        <CardItemWithModal
          leftTx="trainTicket_returnDate"
          rightTx={values.returnDate}
          onPress={this.changeModalState.bind(this, "returnDate", true)}
        />
      </Card>
    )
  }

  renderChoseSeat = ({ values }: FormikProps<FormValues>) => {
    return (
      <Card>
        <CardItem>
          <LeftText tx="trainTicket_totalTicket" />
        </CardItem>
        <CardItem>
          <LeftText tx="trainTicket_seatType" />
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

  changeModalState = (modal: string, val: boolean = true) => {
    console.tron.log("  close")
    this.setState(preState => {
      return produce(preState, stateCopy => {
        stateCopy.modal[modal] = val
      })
    })
  }

  renderModals = ({ values, setFieldValue }: FormikProps<FormValues>) => {
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
              <Screen>
                <Screen transparent preset="scroll" style={ROOT}>
                  {this.renderForm(bag)}
                </Screen>

                <Button
                  tx="confirm"
                  primary
                  full
                  disabled={true}
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
