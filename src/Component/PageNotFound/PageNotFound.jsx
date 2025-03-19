import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>This page does not exist</h1>
      <Link to="/">
        <button>Go back to Home</button>
      </Link>
      <Link to="/ContactUs">
        <button>Go to Contact Us</button>
      </Link>
    </div>
  );
}
