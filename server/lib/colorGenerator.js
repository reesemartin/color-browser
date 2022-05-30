import { createRGBSpectrum, createBrownSpectrum, createGrayscaleSpectrum } from './generateSpectrum.js'

const listColors = (hues = 360, shades = 10) => {
  // generate arrays of all possible color values
  const RBGColors = createRGBSpectrum(hues, shades)
  const brownColors = createBrownSpectrum(shades)
  const greyscaleColors = createGrayscaleSpectrum(shades)

  const colors = [...RBGColors, ...brownColors, ...greyscaleColors]

  return colors
}
export default listColors
