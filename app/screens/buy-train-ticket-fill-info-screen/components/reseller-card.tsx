import React, { useState, useCallback } from "react"
import { SizedBox, Text, View } from "components"
import { TextWithDecoration } from "components/text-with-decoration"
import { Card, CardItem, Input, Item } from "native-base"
import { spacing } from "theme"
import { translate } from "i18n"
import { InputCardItem } from "screens/buy-train-ticket-fill-info-screen/components/InputCardItem"
import { InfoFormVal, ResellerInfoForm } from "screens/buy-train-ticket-fill-info-screen"

interface Props {
  value: ResellerInfoForm
  onChange?: (v: ResellerInfoForm) => void
}

export const ResellerCard = ({ value, onChange }: Props) => {
  const changeText = useCallback((val, fieldName) => {
    let result = { ...value }
    result[fieldName] = val
    onChange(result)
  }, [])

  return (
    <View>
      <TextWithDecoration tx={"trainTicket_resellerInfo"} />
      <SizedBox h={5} />
      <Card>
        <InputCardItem
          placeholder={translate("common_name")}
          onChangeText={val => changeText(val, "name")}
        />
        <InputCardItem
          placeholder={translate("common_passport")}
          onChangeText={val => changeText(val, "passport")}
        />
        <InputCardItem
          placeholder={translate("common_email")}
          onChangeText={val => changeText(val, "email")}
        />
        <InputCardItem
          placeholder={translate("common_phone")}
          onChangeText={val => changeText(val, "phone")}
        />
        <SizedBox h={3} />
      </Card>
    </View>
  )
}
