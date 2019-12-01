import * as React from "react"
import { observer, disposeOnUnmount } from "mobx-react"
import { ScrollView, ViewStyle, StyleSheet } from "react-native"
import _ from "lodash"
import { Text, Button } from "components"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Header, View, Screen, SizedBox } from "components"
import { TextWithDecoration } from "components/text-with-decoration"
import { PassengerCard } from "screens/buy-train-ticket-fill-info-screen/components/passenger-card"
import { TrainFormValues } from "screens/buy-train-ticket-screen"
import { Formik, FormikProps } from "formik"
import { ResellerCard } from "screens/buy-train-ticket-fill-info-screen/components/reseller-card"
import * as Yup from "yup"

interface Props extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing[6],
}

interface TrainTicketValueWithPos extends TrainFormValues {
  seatVal: string[]
  selectedTrainId: string
}

interface State {
  data?: TrainTicketValueWithPos | {}
  passengerAmount: number
  initFormVal: InfoFormVal
  [rest: string]: any
}

export interface ResellerInfoForm {
  name: string
  passport: string
  email: string
  phone: string
}

export interface InfoFormVal {
  passengers: any
  reseller: ResellerInfoForm
}

const validationSchema = Yup.object().shape({})

// @inject("mobxstuff")
@observer
export class BuyTrainTicketFillInfoScreen extends React.Component<Props, State> {
  state = {
    data: {
      seatVal: [],
    },
    passengerAmount: 0,
    initFormVal: {
      passengers: {},
      reseller: {
        name: "",
        passport: "",
        email: "",
        phone: "",
      },
    },
    showPassengersCardContent: false,
  }

  componentWillMount() {
    // @ts-ignore
    const formVal = this.props.navigation.getParam("formVal", {})
    let passengers = {}
    _.forEach(formVal.seatVal, val => {
      passengers[val] = {
        name: "",
        passport: "",
      }
    })

    this.setState(pre => ({
      data: formVal,
      passengerAmount: formVal.seatVal.length,
      initFormVal: {
        ...pre.initFormVal,
        passengers,
      },
    }))
  }

  /* ------------- private methods ------------- */

  onSubmit = (values, bag) => {}

  /* ------------- renders ------------- */

  renderPassengersInfo = (bag: FormikProps<InfoFormVal>) => {
    const { values, setFieldValue } = bag
    const { data, showPassengersCardContent } = this.state
    const { seatVal } = data
    console.tron.log("values", values)

    return seatVal.map((val, idx) => {
      return (
        <React.Fragment key={idx}>
          <PassengerCard
            label={val}
            value={values.passengers[val]}
            showContent={showPassengersCardContent}
            onChange={v => {
              // @ts-ignore
              setFieldValue("passengers." + val, v)
            }}
          />
        </React.Fragment>
      )
    })
  }

  render() {
    const { initFormVal, showPassengersCardContent } = this.state
    const buttonTx = showPassengersCardContent ? "common_hide" : "common_show"
    return (
      <Formik
        initialValues={initFormVal}
        onSubmit={this.onSubmit}
        validationSchema={validationSchema}
      >
        {(bag: FormikProps<InfoFormVal>) => {
          const { errors } = bag
          const disableButton = !_.isEmpty(errors)
          return (
            <View full>
              <Header headerTx={"buyTrainTicketFillInfoScreen_header"} leftIcon={"back"} />
              <SizedBox h={5} />
              <ScrollView>
                <Screen style={ROOT} preset="fixed">
                  <TextWithDecoration tx={"trainTicket_passengersInfo"} />
                  {this.renderPassengersInfo(bag)}
                  <SizedBox h={2} />
                  <Button
                    preset={"link"}
                    style={styles.rightButton}
                    tx={buttonTx}
                    onPress={this.togglePassengersContent}
                  />

                  <SizedBox h={2} />
                  <ResellerCard
                    value={bag.values.reseller}
                    onChange={v => bag.setFieldValue("reseller", v)}
                  />
                </Screen>
              </ScrollView>
              <SizedBox h={8} />
              <View preset={"footer"}>
                <Button tx={"confirm"} full disabled={disableButton} />
              </View>
            </View>
          )
        }}
      </Formik>
    )
  }

  togglePassengersContent = () => {
    this.setState(pre => ({ showPassengersCardContent: !pre.showPassengersCardContent }))
  }
}

const styles = StyleSheet.create({
  rightButton: {
    alignSelf: "flex-end",
  },
})
