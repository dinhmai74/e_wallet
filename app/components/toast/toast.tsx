import { Toast } from "native-base"
import { translate } from "i18n"
import { TranslateKey } from "i18n/lang"

type TToast = "danger" | "success" | "warning" | undefined
type TPosition = "top" | "bottom" | "center" | undefined

export function showToast(
  message: TranslateKey,
  type: TToast = "danger",
  callBack: () => void = () => {},
  position: TPosition = "bottom",
  duration = 3000,
) {
  const text = translate(message)
  const buttonText = translate("common_ok")

  return Toast.show({
    text,
    buttonText,
    duration,
    position,
    type,
    onClose: callBack,
  })
}

export default {
  showToast,
}
