import React from 'react';
import Auths from './use-auth';
const Login = () => {
  const Authentications = Auths();
  console.log(Authentications.user)
  return (
    <div>
     <h1>Login Page </h1> 
     { 
      Authentications.user? <button>Sign Out</button>:
      <button onClick={Authentications.signInWithGoogle}>Sign In</button>
     }
     
    </div>
  );
};

export default Login;