import React from "react";
import { useQuery } from "@apollo/client";
import Loading from "../components/common/Loading";
import NetworkError from "../components/errors/network";

const Resource = ({ query, options = {}, render }) => {
  const { loading, data, error } = useQuery(query, options);
  if (loading) return <Loading />;
  if (error) return <NetworkError />;
  return render(data);
};

export default Resource;
