import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import {
  ColorSchema,
  ColorsSchema,
  ColorsTotalSchema,
  ColorFamilySchema,
  ColorFamiliesSchema,
  ColorFamiliesTotalSchema,
} from '../model/colors.js'

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    color: ColorSchema,
    colors: ColorsSchema,
    colorsTotal: ColorsTotalSchema,
    family: ColorFamilySchema,
    families: ColorFamiliesSchema,
    familiesTotal: ColorFamiliesTotalSchema,
  }),
})

const schema = new GraphQLSchema({
  query: RootQueryType,
})

export default schema
