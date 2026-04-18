import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700 text-center">
        Oops! Page not found
      </h2>

      <p className="mt-2 text-gray-500 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;