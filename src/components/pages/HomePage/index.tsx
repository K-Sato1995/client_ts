import React from "react";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import Post from "../../organisms/Post";

const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <Post />
    </PageTemplate>
  );
};

export default HomePage;
