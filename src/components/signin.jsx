import React from "react";
import GoogleButton from "react-google-button";

import { Auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(Auth, provider);
};

const SignIn = () => {
  return (
    <div className="flex justify-center">
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
