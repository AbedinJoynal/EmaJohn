import React from 'react';
import Auths from './useAuth';
const Login = () => {
  const Authentications = Auths();
  console.log(Authentications.user);
  const handleSignIn=()=> {
    Authentications.signInWithGoogle().then((res)=>{
      window.location.pathname="/review";
    })
  }

  const handleSignOut=()=> {
    Authentications.signOutWithGoogle().then((res)=>{
      window.location.pathname="/"
    })
  }
  return (
    <div>
      <h1>Login Page </h1>
      {Authentications.user ? (
        <button className="main-button" onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button className="main-button" onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default Login;
