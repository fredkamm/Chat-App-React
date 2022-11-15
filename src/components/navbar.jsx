import React from "react";
import { Auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from './signin';

const Navbar = () => {
  const [user] = useAuthState(Auth);
  return (
    <div className="bg-gray-800 h-20 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl">Chat App</h1>
      <SignIn />
    </div>
  );
};

export default Navbar;
