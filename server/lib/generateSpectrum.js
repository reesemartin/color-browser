import { HSLtoHex } from './colorConversion.js'

export const createRGBSpectrum = function (hues = 8, shades = 1) {
  const colors = []

  // define a range of hues we want to group on (ie. 340-360 and 0-5 is Red or 95-135 is Green)
  const hueMap = [
    {
      name: 'Red',
      min: 0,
      max: 8,
    },
    {
      name: 'Orange',
      min: 9,
      max: 38,
    },
    {
      name: 'Yellow',
      min: 39,
      max: 61,
    },
    {
      name: 'Green',
      min: 62,
      max: 159,
    },
    {
      name: 'Blue',
      min: 160,
      max: 259,
    },
    {
      name: 'Purple',
      min: 260,
      max: 330,
    },
    {
      name: 'Red',
      min: 331,
      max: 360,
    },
  ]

  // 360 because we don't want the spectrum to circle back
  const hueStep = 360 / hues

  // there will be more darker shades than lighter if an odd number of shades are requested since the true hue "middle" shade is in the darker set
  const darkerShades = Math.ceil(shades / 2)
  // use clamps to avoid colors that are basically indistinctly close to black/grey saturation/lightness in each hue
  const shadeClampMin = 0.4
  const darkerSaturationStep = (1 - shadeClampMin) / darkerShades
  const darkerLightnessStep = (0.5 - shadeClampMin) / darkerShades

  const lighterShades = Math.floor(shades / 2)
  // use clamps to avoid colors that are basically white saturation/lightness in each hue
  const shadeClampMax = 0.4
  const lighterSaturationStep = (1 - shadeClampMax) / lighterShades
  const lighterLightnessStep = (0.5 - shadeClampMax) / lighterShades

  for (let hueIndex = 1; hueIndex <= hues; hueIndex++) {
    // darker shades
    for (let shadeIndex = 1; shadeIndex <= darkerShades; shadeIndex++) {
      let hsl = {
        h: Math.round(hueIndex * hueStep),
        s: Math.round((shadeIndex * darkerSaturationStep + shadeClampMin) * 100) / 100,
        l: Math.round((shadeIndex * darkerLightnessStep + shadeClampMin) * 100) / 100,
      }
      let color = {
        hex: HSLtoHex(hsl.h, hsl.s, hsl.l),
        hue: hsl.h,
        family: "",
      }
      colors.push(color)
    }

    // lighter shades
    for (let shadeIndex = 1; shadeIndex <= lighterShades; shadeIndex++) {
      let hsl = {
        h: Math.round(hueIndex * hueStep),
        s: (Math.round(shadeIndex * lighterSaturationStep * 100) / 100 - 1) * -1,
        l: Math.round(shadeIndex * lighterLightnessStep * 100) / 100 + 0.5,
      }
      let color = {
        hex: HSLtoHex(hsl.h, hsl.s, hsl.l),
        hue: hsl.h,
        family: "",
      }
      colors.push(color)
    }
  }

  colors.map((color) => {
    hueMap.map((hue) => {
      if (color.hue >= hue.min && color.hue <= hue.max) {
        color.family = hue.name
      }
    })
  })

  return colors
}

export const createBrownSpectrum = function (shades = 1) {
  const colors = []

  // there will be more darker shades than lighter if an odd number of shades are requested since the true hue "middle" shade is in the darker set
  const darkerShades = Math.ceil(shades / 2)
  // use clamps to avoid colors that are basically indistinctly close to black lightness
  const shadeClampMin = 0.1
  const darkerLightnessStep = (0.5 - shadeClampMin) / darkerShades

  const lighterShades = Math.floor(shades / 2)
  // use clamps to avoid colors that are basically white lightness
  const shadeClampMax = 0.1
  const lighterLightnessStep = (0.5 - shadeClampMax) / lighterShades

  // darker shades
  for (let shadeIndex = 1; shadeIndex <= darkerShades; shadeIndex++) {
    let hsl = {
      h: 16,
      s: 0.3,
      l: Math.round((shadeIndex * darkerLightnessStep + shadeClampMin) * 100) / 100,
    }
    let color = {
      hex: HSLtoHex(hsl.h, hsl.s, hsl.l),
      hue: 16,
      family: "Brown",
    }
    colors.push(color)
  }

  // lighter shades
  for (let shadeIndex = 1; shadeIndex <= lighterShades; shadeIndex++) {
    let hsl = {
      h: 16,
      s: 0.3,
      l: Math.round(shadeIndex * lighterLightnessStep * 100) / 100 + 0.5,
    }
    let color = {
      hex: HSLtoHex(hsl.h, hsl.s, hsl.l),
      hue: 16,
      family: "Brown",
    }
    colors.push(color)
  }

  return colors
}

export const createGrayscaleSpectrum = function (shades = 1) {
  const colors = []

  // there will be more darker shades than lighter if an odd number of shades are requested since the true hue "middle" shade is in the darker set
  const darkerShades = Math.ceil(shades / 2)
  // use clamps to avoid colors that are basically indistinctly close to black lightness
  const shadeClampMin = 0.1
  const darkerLightnessStep = (0.5 - shadeClampMin) / darkerShades

  const lighterShades = Math.floor(shades / 2)
  // use clamps to avoid colors that are basically white lightness
  const shadeClampMax = 0.1
  const lighterLightnessStep = (0.5 - shadeClampMax) / lighterShades

  // darker shades
  for (let shadeIndex = 1; shadeIndex <= darkerShades; shadeIndex++) {
    let hsl = {
      h: 0,
      s: 0,
      l: Math.round((shadeIndex * darkerLightnessStep + shadeClampMin) * 100) / 100,
    }
    let color = {
      hex: HSLtoHex(hsl.h, hsl.s, hsl.l),
      hue: 0,
      family: "Gray",
    }
    colors.push(color)
  }

  // lighter shades
  for (let shadeIndex = 1; shadeIndex <= lighterShades; shadeIndex++) {
    let hsl = {
      h: 0,
      s: 0,
      l: Math.round(shadeIndex * lighterLightnessStep * 100) / 100 + 0.5,
    }
    let color = {
      hex: HSLtoHex(hsl.h, hsl.s, hsl.l),
      hue: 0,
      family: "Gray",
    }
    colors.push(color)
  }

  return colors
}
