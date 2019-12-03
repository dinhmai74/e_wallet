import * as React from "react"
import { observer, disposeOnUnmount } from "mobx-react"
import { ScrollView, ViewStyle, StyleSheet } from "react-native"
import _ from "lodash"
import { Text, Button } from "components"
import { color, spacing } from "../../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Header, View, Screen, SizedBox } from "components"
import { TextWithDecoration } from "components/text-with-decoration"
import { PassengerCard } from "screens/buy-train-ticket/fill-info-screen/components/passenger-card"
import { TrainFormValues } from "screens/buy-train-ticket/buy-train-ticket-screen"
import { Formik, FormikProps } from "formik"
import { ResellerCard } from "screens/buy-train-ticket/fill-info-screen/components/reseller-card"
import * as Yup from "yup"
import { navigateService } from "utils"

interface Props extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing[6],
}

export interface TrainTicketValueWithPos extends TrainFormValues {
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

const validationSchema = Yup.object().shape({
  reseller: Yup.object().shape({
    name: Yup.string().required(),
    passport: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    phone: Yup.string().required(),
  }),
})

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

  togglePassengersContent = () => {
    this.setState(pre => ({ showPassengersCardContent: !pre.showPassengersCardContent }))
  }

  /* ------------- renders ------------- */

  renderPassengersInfo = (bag: FormikProps<InfoFormVal>) => {
    const { values, setFieldValue } = bag
    const { data, showPassengersCardContent } = this.state
    const { seatVal } = data

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
    const { data, initFormVal, showPassengersCardContent } = this.state
    const buttonTx = showPassengersCardContent ? "common_hide" : "common_show"
    return (
      <Formik
        initialValues={initFormVal}
        // @ts-ignore
        initialErrors={
          {
            reseller: ({
              email: true,
              name: true,
              passport: true,
              phone: true,
            } as unknown) as ResellerInfoForm,
          } as InfoFormVal
        }
        // @ts-ignore
        initialTouched={{
          reseller: ({
            email: false,
            name: false,
            passport: false,
            phone: false,
          } as unknown) as ResellerInfoForm,
        }}
        onSubmit={this.onSubmit}
        validationSchema={validationSchema}
      >
        {(bag: FormikProps<InfoFormVal>) => {
          const { errors, values, touched } = bag
          const disableButton = !_.isEmpty(errors)
          let touchedReseller =
            touched.reseller.passport &&
            touched.reseller.name &&
            touched.reseller.email &&
            touched.reseller.phone
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
                    errors={touchedReseller ? errors.reseller : undefined}
                    onChange={(v, fieldName) => {
                      // @ts-ignore
                      bag.setFieldValue(`reseller.${fieldName}`, v)
                      // @ts-ignore
                      bag.setFieldTouched(`reseller.${fieldName}`, true)
                    }}
                  />
                </Screen>
              </ScrollView>
              <SizedBox h={8} />
              <View preset={"footer"}>
                <Button
                  tx={"confirm"}
                  full
                  disabled={disableButton}
                  onPress={() => {
                    navigateService.navigate("BuyTrainTicketConfirmPassengerInfoScreen", {
                      ticketInfo: data,
                      passengerInfo: values,
                    })
                  }}
                />
              </View>
            </View>
          )
        }}
      </Formik>
    )
  }
}

const styles = StyleSheet.create({
  rightButton: {
    alignSelf: "flex-end",
  },
})
