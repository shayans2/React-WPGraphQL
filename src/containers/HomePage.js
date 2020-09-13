import React from "react";
import { GET_POST } from "../graphql/queries/singlePost";
import { useApolloClient } from "@apollo/client";
import HomePage from "../components/HomePage";

const HomePageContainer = () => {
  const client = useApolloClient();
  const preFetchPost = (uri) => {
    client.query({
      query: GET_POST,
      variables: { uri },
    });
  };
  return <HomePage preFetchPost={preFetchPost} />;
};

export default HomePageContainer;
