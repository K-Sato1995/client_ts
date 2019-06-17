import Button from "@material-ui/core/Button";
import * as React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const Posts = () => {
  <Query
    query={gql`
      query {
        posts {
          id
          title
          description
        }
      }
    `}
  >
    {(loading, error, data)} => {
      if(loading) return <p>Loading</p>;
      return data.posts
    }
  </Query>
};
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>GraphQL Client</h1>
      <Button variant="contained" color="primary">
        Test
      </Button>
    </div>
  );
};
export default App;
