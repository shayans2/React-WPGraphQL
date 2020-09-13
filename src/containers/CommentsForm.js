import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "../utils/handleForm";
import CommentsForm from "../components/CommentsForm";
import { CREATE_COMMENT } from "../graphql/mutations/comments";
import Joi from "joi";

const CommentsFormContainer = ({ data }) => {
  const [commentInitialData] = useState({
    authorIp: "", // Get user IP
    commentOn: data.postBy.databaseId,
    clientMutationId: "CreateComment",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [createComment, { loading }] = useMutation(CREATE_COMMENT);

  const form = useForm(
    {
      initialValues: {
        author: "",
        authorEmail: "",
        authorUrl: "",
        content: "",
      },
      validationSchema: {
        author: Joi.string().required(),
        authorEmail: Joi.string()
          .min(3)
          .email({ tlds: { allow: false } })
          .required(),
        authorUrl: Joi.string().optional().allow(""),
        content: Joi.string().min(3).required(),
      },
    },
    {
      onSubmit: async ({ values }) => {
        try {
          setError(null);
          await createComment({
            variables: {
              input: { ...values, ...commentInitialData },
            },
          });
          setSuccess(true);
          setSuccess(false);
        } catch (error) {
          setError(error);
        }
      },
    }
  );

  const renderError = (error) => {
    if (error.type === "formValidation") {
      return <div>{error.notice.details[0].message}</div>;
    } else {
      return (
        <ul className="w-full text-red-500 text-sm italic mb-4">
          {error.graphQLErrors.map(({ message }) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <CommentsForm
      success={success}
      error={error}
      renderError={renderError}
      form={form}
      formLoading={loading}
    />
  );
};

export default CommentsFormContainer;
