import React from "react";
import { Auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./signin";
import LogOut from "./logout";

const Navbar = () => {
  const [user] = useAuthState(Auth);
  return (
    <div className="bg-blue-500 h-20 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl">Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
