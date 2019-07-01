const formatNumber = number => {
  return number < 10 ? '0' + number : String(number)
}

export const secondsToValidTime = totalSeconds => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${formatNumber(minutes)}:${formatNumber(seconds)}`
}