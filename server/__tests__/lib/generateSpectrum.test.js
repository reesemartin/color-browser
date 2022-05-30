import { createRGBSpectrum, createBrownSpectrum, createGrayscaleSpectrum } from '../../lib/generateSpectrum'

describe('createRGBSpectrum', () => {
  it('returns an array of equally spaced colors on the spectrum based on the requested hue and shade count', () => {
    const spectrum = [
      { family: 'Green', hex: '#00ff00', hue: 120 },
      { family: 'Blue', hex: '#0000ff', hue: 240 },
      { family: 'Red', hex: '#ff0000', hue: 360 },
    ]
    expect(createRGBSpectrum(3, 1)).toEqual(spectrum)
  })
})

describe('createBrownSpectrum', () => {
  it('returns an array of equally spaced shades of brown based on the requested shade count', () => {
    const spectrum = [
      { family: 'Brown', hex: '#4c3229', hue: 16 },
      { family: 'Brown', hex: '#7b5142', hue: 16 },
      { family: 'Brown', hex: '#a66e59', hue: 16 },
      { family: 'Brown', hex: '#c9a89c', hue: 16 },
      { family: 'Brown', hex: '#ede2de', hue: 16 },
    ]
    expect(createBrownSpectrum(5)).toEqual(spectrum)
  })
})

describe('createGrayscaleSpectrum', () => {
  it('returns an array of equally spaced shades of gray based on the requested shade count', () => {
    const spectrum = [
      { family: 'Gray', hex: '#3b3b3b', hue: 0 },
      { family: 'Gray', hex: '#5e5e5e', hue: 0 },
      { family: 'Gray', hex: '#808080', hue: 0 },
      { family: 'Gray', hex: '#b3b3b3', hue: 0 },
      { family: 'Gray', hex: '#e6e6e6', hue: 0 },
    ]
    expect(createGrayscaleSpectrum(5)).toEqual(spectrum)
  })
})
