import React from "react";
import Resource from "../containers/Resource";
import { GET_POST } from "../graphql/queries/singlePost";
import CommentsFormContainer from "../containers/CommentsForm";
import avatarImage from "../dist/images/default-avatar.png";

const SinglePost = ({ match }) => {
  return (
    <Resource
      query={GET_POST}
      options={{
        variables: {
          uri: match.params.uri,
        },
      }}
      render={(data) => (
        <div className="animate__animated animate__fadeIn">
          {data.postBy.featuredImage && (
            <div className="mb-10">
              <img
                src={data.postBy.featuredImage.node.sourceUrl}
                alt={data.postBy.featuredImage.node.altText}
                style={{ height: 400, width: 1000 }}
                className="object-cover shadow-lg"
              />
            </div>
          )}
          <h1 className="text-gray-900 font-bold text-5xl mb-2">
            {data.postBy.title}
          </h1>
          <p className="text-xl font-light text-gray-600 mb-16">
            {new Date(data.postBy.date).toLocaleDateString()} —{" "}
            {data.postBy.categories.nodes.map((category, index) => (
              <span key={category.id}>
                {index ? ", " : ""}
                {category.name}
              </span>
            ))}
          </p>
          <div className="text-gray-800 font-light text-lg" dangerouslySetInnerHTML={{ __html: data.postBy.content }}></div>
          <div className="mt-24">
            <h2 className="text-gray-800 font-bold text-2xl">Comments</h2>

            {data.postBy.comments.length !== 0 &&
              data.postBy.comments.nodes.map((comment) => (
                <div
                  className="flex my-6 max-w-md md:max-w-2xl"
                  key={comment.id}
                >
                  <div className="flex items-start px-4 py-6">
                    <img
                      className="w-12 h-12 rounded-full object-cover mr-6 shadow"
                      src={avatarImage}
                      alt="avatar"
                    />
                    <div>
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                          {comment.author.node.name}
                        </h2>
                      </div>
                      <div className="mt-1 text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <CommentsFormContainer data={data} />
        </div>
      )}
    />
  );
};

export default SinglePost;
