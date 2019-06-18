import * as React from "react";
import { usePostsQuery } from "../../../generated/graphql";
import List from "../../molecules/List";
import Button from "../../atoms/Button";

const Post = () => {
  const { data, error, loading } = usePostsQuery();

  if (loading) return <div>Fetching</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>Data not found</div>;

  return (
    <div className="App">
      <h1>GraphQL Client</h1>
      <List items={data.posts} />
      <Button />
    </div>
  );
};
export default Post;
