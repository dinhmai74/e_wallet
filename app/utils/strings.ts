export const strings = {
  /** transition strings */
  transition: {
    from: {
      left: "transitionFromLeft",
      right: "transitionFromRight",
      top: "transitionFromTop",
      bottom: "transitionFromBottom",
    },
    opacity: "transitionScaleWithOpacity",
  },
}

// @ts-ignore
export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? "-" : ""

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString()
    let j = i.length > 3 ? i.length % 3 : 0

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          // @ts-ignore
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    )
  } catch (e) {
    console.log(e)
  }
}
