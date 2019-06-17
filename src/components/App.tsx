import Button from "@material-ui/core/Button";
import * as React from "react";
import { usePostsQuery } from "../generated/graphql";

const App: React.FC = () => {
  const { data, error, loading } = usePostsQuery();

  if (loading) return <div>Fetching</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>Data not found</div>;

  const posts = data.posts.map(post => <li key={post.id}>{post.title}</li>);

  return (
    <div className="App">
      <h1>GraphQL Client</h1>
      <Button variant="contained" color="primary">
        Test
      </Button>
      <ul>{posts}</ul>
    </div>
  );
};
export default App;
