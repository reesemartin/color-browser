import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import 'dotenv/config'

import schema from './schema/schema.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: process.env.DEV === "true" ? process.env.DEV : false
}))

app.listen(5000, () => {
  const port = process.env.PORT ? process.env.PORT : 5000
  console.log(`Server Started at ${port}`)
})
