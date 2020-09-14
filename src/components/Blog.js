import React, { useState } from "react";
import { GET_ALL_POSTS } from "../graphql/queries/blog";
import Resource from "../containers/Resource";
import { Link } from "react-router-dom";
import _ from "lodash";

const HomePage = ({ preFetchPost }) => {
  const offset = 10;
  const [loading, setLoading] = useState(false);
  const updateQuery = (previousResult, { fetchMoreResult }) => {
    return fetchMoreResult.posts.edges.length
      ? fetchMoreResult
      : previousResult;
  };
  return (
    <Resource
      query={GET_ALL_POSTS}
      options={{
        variables: {
          first: offset,
        },
      }}
      render={(data, fetchMore) => (
        <section className="mb-56">
          <div className="flex flex-row justify-between items-center mb-10">
            <span className="text-5xl font-bold"> Blog </span>
          </div>
          {data.posts.edges.map((post) => (
            <div
              className="mb-10"
              key={post.node.id}
              onMouseEnter={_.once(() =>
                preFetchPost(post.node.uri.replace(/\//g, ""))
              )}
            >
              <Link
                to={`/posts${post.node.uri}`}
                className="text-2xl font-light text-gray-800 hover:underline"
              >
                {post.node.title}
              </Link>
              <p className="text-xl font-light text-gray-600 pt-2">
                {new Date(post.node.date).toLocaleDateString()} —{" "}
                {post.node.categories.nodes.map((category, index) => (
                  <span key={category.id}>
                    {index ? ", " : ""}
                    {category.name}
                  </span>
                ))}
              </p>
            </div>
          ))}

          {!loading && data.posts.pageInfo.hasPreviousPage ? (
            <button
              className="text-xl font-bold mr-3"
              onClick={() => {
                setLoading(true);
                fetchMore({
                  variables: {
                    first: null,
                    after: null,
                    last: offset,
                    before: data.posts.pageInfo.startCursor || null,
                  },
                  updateQuery,
                }).then((res) => setLoading(false));
              }}
            >
              &larr; Previous
            </button>
          ) : null}
          {!loading && data.posts.pageInfo.hasNextPage ? (
            <button
              className="text-xl font-bold"
              onClick={() => {
                setLoading(true);
                fetchMore({
                  variables: {
                    first: offset,
                    after: data.posts.pageInfo.endCursor || null,
                    last: null,
                    before: null,
                  },
                  updateQuery,
                }).then((res) => setLoading(false));
              }}
            >
              Next &rarr;
            </button>
          ) : null}
          {loading && <span className="text-xl font-bold">Loading...</span>}
        </section>
      )}
    />
  );
};

export default HomePage;
