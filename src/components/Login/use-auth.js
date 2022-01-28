import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import app from '../../firebase.config';


const Auths = () => {
  const [user,setUser]=useState(null)
 const signInWithGoogle=()=>{

  const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 
  signInWithPopup(auth, provider)
    .then((res) => {
      const {displayName,email,photoURL} = res.user
      const SignedInUser={name:displayName,email:email,photoURL:photoURL}
      setUser(SignedInUser)
      return res.user
    })
    .catch((err) => {
      console.log(err)
      setUser(null)
      return err.message
    });
 }

  
  return{ user, signInWithGoogle};
};

export default Auths;
