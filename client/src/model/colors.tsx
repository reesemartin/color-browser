import axios from 'axios'

export interface Color {
  hex: string
  hue: string
  family?: ColorFamily
}

export interface ColorResults {
  colors: Color[]
  colorsTotal: number
}

export interface ColorFamily {
  name: string
  colors?: Color[]
}

export interface ColorFamilyResults {
  families: ColorFamily[]
  familiesTotal: number
}

export const getAPIURL = () => {
  const APIURL = import.meta.env.VITE_API_URL
  return APIURL
}

export const listColors = async (
  limit: number = 12,
  offset: number = 0,
  hexOnly: boolean = false
): Promise<ColorResults> => {
  const query = {
    operationName: 'listColors',
    query: `query listColors($limit: Int!, $offset: Int!) {
        colors(limit: $limit, offset: $offset) {
          hex
          ${
            hexOnly
              ? ''
              : `
              hue
              family {
                name
              }
              `
          }
        }
        colorsTotal
      }`,
    variables: {
      limit,
      offset,
    },
  }
  const response = await axios({
    url: `${getAPIURL()}/api`,
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    data: query,
  })
  return response.data.data
}

export const getColor = async (hex: string): Promise<Color> => {
  const query = {
    operationName: 'getColor',
    query: `query getColor($hex: String!) {
        color(hex: $hex) {
          hex
          hue
          family {
            name
            colors {
              hex
              hue
            }
          }
        }
      }`,
    variables: {
      hex,
    },
  }
  const response = await axios({
    url: `${getAPIURL()}/api`,
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    data: query,
  })
  return response.data.data.color
}

export const listColorFamilies = async (limit: number = 12, offset: number = 0): Promise<ColorFamilyResults> => {
  const query = {
    operationName: 'listColorFamilies',
    query: `query listColorFamilies {
        families {
          name
          colors {
            hex
            hue
          }
        }
        familiesTotal
      }`,
    variables: {
      limit,
      offset,
    },
  }
  const response = await axios({
    url: `${getAPIURL()}/api`,
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    data: query,
  })
  return response.data.data
}

export const getColorFamily = async (name: string): Promise<ColorFamily> => {
  const query = {
    operationName: 'getColorFamily',
    query: `query getColorFamily($name: String!) {
        family(name: $name) {
          name
          colors {
            hex
            hue
          }
        }
      }`,
    variables: {
      name,
    },
  }
  const response = await axios({
    url: `${getAPIURL()}/api`,
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    data: query,
  })
  return response.data.data.family
}

export const getRandomColorHex = async (): Promise<string> => {
  const data = await listColors(0, 0, true)
  const randomColor = data.colors[Math.floor(Math.random() * data.colors.length)]
  return randomColor.hex
}
