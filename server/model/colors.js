import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql'
import colors from './../db/colors.js'

export const ColorType = new GraphQLObjectType({
  name: 'Color',
  description: 'This represents a color',
  fields: () => ({
    hex: { type: GraphQLNonNull(GraphQLString) },
    hue: { type: GraphQLNonNull(GraphQLFloat) },
    family: {
      type: ColorFamilyType,
      resolve: (color) => ({ name: color.family }),
    },
  }),
})

export const ColorFamilyType = new GraphQLObjectType({
  name: 'ColorFamily',
  description: 'This represents a color family',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    colors: {
      type: new GraphQLList(ColorType),
      resolve: (family) => {
        return colors.filter((color) => color.family === family.name)
      },
    },
  }),
})

/*
{
  color(hex: "#a34633") {
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
}
*/
export const ColorSchema = {
  type: ColorType,
  description: 'A single color',
  args: {
    hex: { type: GraphQLString },
  },
  resolve: (parent, args) => colors.find((color) => color.hex === args.hex),
}

/*
{
  colors(limit: 12, offset: 0, family: null) {
    hex
    hue
    family {
      name
    }
  }
}
*/
export const ColorsSchema = {
  type: new GraphQLList(ColorType),
  description: 'List of all colors',
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    family: { type: GraphQLString },
    term: { type: GraphQLString },
  },
  resolve: (parent, args) => {
    console.log(args.term)
    const filteredColors = colors.filter(color => (!args.family || color.family === args.family) && (!args.term || color.hex.toLowerCase().indexOf(args.term.toLowerCase()) !== -1))
    return filteredColors.slice(
      args.offset ? args.offset : 0,
      args.limit ? args.limit + (args.offset ? args.offset : 0) : colors.length
    )
  },
}

export const ColorsTotalSchema = {
  type: GraphQLInt,
  description: 'Total of all colors',
  args: {
    family: { type: GraphQLString },
    term: { type: GraphQLString },
  },
  resolve: (parent, args) => colors.filter(color => (!args.family || color.family === args.family) && (!args.term || color.hex.toLowerCase().indexOf(args.term.toLowerCase()) !== -1)).length,
}

/*
{
  family(name: "Orange") {
    name
    colors {
      hex
      hue
    }
  }
}
*/
export const ColorFamilySchema = {
  type: ColorFamilyType,
  description: 'A single color family',
  args: {
    name: { type: GraphQLString },
  },
  resolve: (parent, args) => ({
    name: args.name,
    colors: colors.filter((color) => color.family === args.name),
  }),
}

/*
{
  families(limit: 12, offset: 0) {
    name
    colors {
      hex
      hue
    }
  }
}
*/
export const ColorFamiliesSchema = {
  type: new GraphQLList(ColorFamilyType),
  description: 'List of all color families',
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (parent, args) => {
    const families = colors.reduce((families, color) => {
      if (families.indexOf(color.family) === -1) {
        families.push(color.family)
      }
      return families
    }, [])

    const result = families.map((family) => ({
      name: family,
      colors: colors.filter((color) => color.family === family),
    }))

    return result.slice(
      args.offset ? args.offset : 0,
      args.limit ? args.limit + (args.offset ? args.offset : 0) : result.length
    )
  },
}

export const ColorFamiliesTotalSchema = {
  type: GraphQLInt,
  description: 'Total of all color families',
  resolve: () => {
    const families = colors.reduce((families, color) => {
      if (families.indexOf(color.family) === -1) {
        families.push(color.family)
      }
      return families
    }, [])

    const result = families.map((family) => ({
      name: family,
      colors: colors.filter((color) => color.family === family),
    }))

    return result.length
  },
}
