import { TranslateKey } from "i18n/lang"
import { IconTypes } from "components"

export interface HomeFunctionItemModel {
  id: number
  title: TranslateKey
  icon: IconTypes
  callBack: () => void
  color: string
}
