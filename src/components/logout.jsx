import React from "react";
import { Auth } from "../firebase";

const LogOut = () => {
  const signOut = () => {
    signOut(Auth);
  };

  return (
    <button
      onClick={() => Auth.signOut()}
      className="bg-gray-200 px-4 py-2 hover:bg-gray-100"
    >
      Logout
    </button>
  );
};

export default LogOut;
