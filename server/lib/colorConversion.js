// based on https://stackoverflow.com/a/44134328
export const HSLtoHex = (h, s, l) => {
  const a = s * Math.min(l, 1 - l)
  const hexConvert = (n) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0') // convert to Hex and prefix "0" if needed
  }
  return `#${hexConvert(0)}${hexConvert(8)}${hexConvert(4)}`
}
