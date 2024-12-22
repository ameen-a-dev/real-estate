import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col  ">
      <h1>Page Not Found</h1>
      <button className="bg-blue-500 px-8 py-3 rounded">
        <Link to="/">Back To Home</Link>
      </button>
    </div>
  );
};

export default PageNotFound;
