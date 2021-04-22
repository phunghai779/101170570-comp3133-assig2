const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type hotel {
     id: ID!
     hotel_id: Int!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
     user_id: Int!
   }

   type booking {
       id: ID!
       hotel_id: Int!
       booking_date: String!
       booking_start: String!
       booking_end: String!
       user_id: Int!
   }

   type user {
       id: ID!
       user_id: Int!
       user_name: String!
       password: String!
       email: String!
   }

   type Query {
     getHotel: [hotel]
     getHotelByName(hotel_name: String!): [hotel]
     getHotelByCity(city: String!): [hotel]
     getBooking: [booking]
     getUser: [user]
   }

   type Mutation {
     addHotel(hotel_id: Int!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Int!): hotel

     addUser(user_id: Int!
        user_name: String!
        password: String!
        email: String!): user

     addBooking(hotel_id: Int!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: Int!): booking
   }
`