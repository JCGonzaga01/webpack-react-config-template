import React from "react";

const Loading = ({ isLoading, pastDelay, error }) => {
  if (isLoading && pastDelay) return <p>Loading...</p>;
  else if (error && !isLoading) return <p>Error!</p>;
  else return null;
};

export default Loading;
