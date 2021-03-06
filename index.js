'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

const typeDefs = readFileSync(
	join(__dirname,'lib','schema.graphql'),
	'utf8'
)

const schema = makeExecutableSchema({ typeDefs, resolvers })


app.use('/graphql',graphqlHTTP({
	schema,
	rootValue: resolvers,
	graphiql: true,
}))


app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}/graphql`)
})
