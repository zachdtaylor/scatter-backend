import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  context: request => ({
    ...request,
    db: mongoose.connection
  })
})

server.start(() => console.log(`Server is running on port 4000`))