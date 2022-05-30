import { HSLtoHex } from '../../lib/colorConversion'

describe('HSLtoHex', () => {
  it('converts an HSL color to a hex string', () => {
    // red
    expect(HSLtoHex(0, 1, 0.5)).toEqual('#ff0000')
  })
})
