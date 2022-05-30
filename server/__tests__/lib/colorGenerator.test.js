import listColors from '../../lib/colorGenerator'

describe('listColors', () => {
  it('returns an array of equally spaced colors on the spectrum based on the requested hue and shade count followed by equally spaced brown and gray spectrums', () => {
    const spectrum = [
      { family: 'Green', hex: '#2caf2c', hue: 120 },
      { family: 'Green', hex: '#18d818', hue: 120 },
      { family: 'Green', hex: '#00ff00', hue: 120 },
      { family: 'Green', hex: '#3cdd3c', hue: 120 },
      { family: 'Green', hex: '#70c270', hue: 120 },
      { family: 'Blue', hex: '#2c2caf', hue: 240 },
      { family: 'Blue', hex: '#1818d8', hue: 240 },
      { family: 'Blue', hex: '#0000ff', hue: 240 },
      { family: 'Blue', hex: '#3c3cdd', hue: 240 },
      { family: 'Blue', hex: '#7070c2', hue: 240 },
      { family: 'Red', hex: '#af2c2c', hue: 360 },
      { family: 'Red', hex: '#d81818', hue: 360 },
      { family: 'Red', hex: '#ff0000', hue: 360 },
      { family: 'Red', hex: '#dd3c3c', hue: 360 },
      { family: 'Red', hex: '#c27070', hue: 360 },
      { family: 'Brown', hex: '#4c3229', hue: 16 },
      { family: 'Brown', hex: '#7b5142', hue: 16 },
      { family: 'Brown', hex: '#a66e59', hue: 16 },
      { family: 'Brown', hex: '#c9a89c', hue: 16 },
      { family: 'Brown', hex: '#ede2de', hue: 16 },
      { family: 'Gray', hex: '#3b3b3b', hue: 0 },
      { family: 'Gray', hex: '#5e5e5e', hue: 0 },
      { family: 'Gray', hex: '#808080', hue: 0 },
      { family: 'Gray', hex: '#b3b3b3', hue: 0 },
      { family: 'Gray', hex: '#e6e6e6', hue: 0 },
    ]
    expect(listColors(3, 5)).toEqual(spectrum)
  })
})
