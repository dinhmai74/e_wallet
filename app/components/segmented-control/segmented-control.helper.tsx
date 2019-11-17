import { HomeFunctionItemModel } from "models/home-function-item.model"
import { IconTypes } from "components"
import { TranslateKey } from "i18n/lang"
import { RootRouteName } from "navigation/root-navigator"

export class HomeFunctionItem implements HomeFunctionItemModel {
  id: number
  icon: IconTypes
  title: TranslateKey
  color: string
  route: RootRouteName

  bind = (val: HomeFunctionItemModel) => {
    this.id = val.id
    this.icon = val.icon
    this.title = val.title
    this.color = val.color
    this.route = val.route
  }
}

export default HomeFunctionItem
