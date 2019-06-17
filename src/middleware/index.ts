import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
export const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

client
  .query({
    query: gql`
      query {
        posts {
          id
          title
          description
        }
      }
    `
  })
  .then(result => console.log(result));
