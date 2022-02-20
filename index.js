const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const {MONGODB} = require('./config')

// Defined gql to acomodate Query
const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`
// Defined resolver of the query that basically says what a query needs to do.
const resolvers = {
    Query: {
        sayHi: () => 'Hello Ameer'
    }
    
}
const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(()=>{
        console.log('MongoDB Connected');
        return server.listen({port: 5000});
    }).then(res => {
        console.log(`server running at ${res.url}`);
    });



