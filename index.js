// depencesies imports
const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

//reletaive imports
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const {MONGODB} = require('./config');


// Defined resolver of the query that basically says what a query needs to do.
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// connection to mongodb
mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(()=>{
        console.log('MongoDB Connected');
        return server.listen({port: 5000});
    }).then(res => {
        console.log(`server running at ${res.url}`);
    });



