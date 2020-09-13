import React from "react";
import { GET_POST } from "../graphql/queries/singlePost";
import { useApolloClient } from "@apollo/client";
import Blog from "../components/Blog";

const BlogContainer = () => {
  const client = useApolloClient();
  const preFetchPost = (uri) => {
    client.query({
      query: GET_POST,
      variables: { uri },
    });
  };
  return <Blog preFetchPost={preFetchPost} />;
};

export default BlogContainer;
