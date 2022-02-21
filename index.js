// depencesies imports
const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

//reletaive imports
const User = require('./models/User');
const Post = require('./models/Post');
const {MONGODB} = require('./config');

// Defined gql to acomodate Query
const typeDefs = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!

    }
    type Query{
        getPosts: [Post]
    }
`
// Defined resolver of the query that basically says what a query needs to do.
const resolvers = {
    Query: {
        async getPosts(){
            try{
                const pos = await Post.find();
                return pos;
            }catch (err){
                throw new Error(err);
            }
        }
    }
    
}
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



