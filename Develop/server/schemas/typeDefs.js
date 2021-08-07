const { gql } = require("apollo-server-express");
const typeDefs = gql`
  

type Book {
    bookId: ID
    author:String
    description: String
    image:  String
    link:String
    title: String 
  
  }

type User {
    _id: ID
    username: String
    email: String
    password: String
  }
type Auth {
    token: ID
    user: User
  }

type Query {
    me: User
      }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!,email: String!, password: String!): Auth

    saveBook(author:String,description:String, title:String, bookId:String!, image:String!, link:String!): User
    removeBook(bookId: ID!): User

      
    }

`;

module.exports = typeDefs;