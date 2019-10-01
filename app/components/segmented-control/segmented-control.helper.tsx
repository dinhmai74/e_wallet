import { HomeFunctionItemModel } from "models/home-function-item.model"
import { IconTypes } from "components"
import { TranslateKey } from "i18n/lang"

export class HomeFunctionItem implements HomeFunctionItemModel {
  callBack: () => void
  id: number
  icon: IconTypes
  title: TranslateKey
  color: string

  bind = (val: HomeFunctionItemModel) => {
    this.id = val.id
    this.callBack = val.callBack
    this.icon = val.icon
    this.title = val.title
    this.color = val.color
  }
}

export default HomeFunctionItem
