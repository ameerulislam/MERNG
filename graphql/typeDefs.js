const {gql} = require('apollo-server');

// Defined gql to accomodate Query
module.exports = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!

    }
    type Query{
        getPosts: [Post]
    }
`;