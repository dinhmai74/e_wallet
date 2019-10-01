export const getRandomColor = () => {
  let colorValues = ["red", "blue", "green", "yellow"]
  return colorValues[Math.floor(Math.random() * colorValues.length)]
}
