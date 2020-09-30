import React from "react";
import Resource from "../containers/Resource";
import { GET_PAGE } from "../graphql/queries/singlePage";

const SinglePost = ({ match }) => {
  return (
    <Resource
      query={GET_PAGE}
      options={{
        variables: {
          uri: match.params.uri,
        },
      }}
      render={(data) => (
        <div className="animate__animated animate__fadeIn">
          {data.page.featuredImage && (
            <div className="mb-10">
              <img
                src={data.page.featuredImage.node.sourceUrl}
                alt={data.page.featuredImage.node.altText}
                style={{ height: 400, width: 1000 }}
                className="object-cover shadow-lg"
              />
            </div>
          )}
          <h1 className="text-gray-900 font-bold text-5xl mb-2">
            {data.page.title}
          </h1>
          <div className="text-gray-800 font-light text-lg" dangerouslySetInnerHTML={{ __html: data.page.content}}></div>
        </div>
      )}
    />
  );
};

export default SinglePost;
