import { TranslateKey } from "i18n/lang"
import { IconTypes } from "components"
import { RootRouteName } from "navigation/root-navigator"

export interface HomeFunctionItemModel {
  id: number
  title: TranslateKey
  icon: IconTypes
  color: string
  route: RootRouteName
}
