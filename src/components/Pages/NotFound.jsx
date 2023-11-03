import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <>
      <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="text-3xl font-bold">Oops! Error</h1>
        <p className="my-5 text-xl">Sorry, an unexpected error has occured.</p>
        <i className="my-5 text-lg">{error.statusText || error.message}</i>
      </div>
    </>
  );
};

export default NotFound;
