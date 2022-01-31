import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import app from '../../firebase.config';

const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  const auths = Auths();
  return (
    <AuthContext.Provider value={auths}>{props.children}</AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
export const PrivateRoute=({ children, ...rest })=> {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
const getUser = (user) => {
  const { displayName, email, photoURL } = user;
  return { name: displayName, email: email, photoURL: photoURL };
};
const Auths = () => {
  const [user, setUser] = useState(null);
  const signInWithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

  return  signInWithPopup(auth, provider)
      .then((res) => {
        const SignedInUser = getUser(res.user);
        setUser(SignedInUser);
        return res.user;
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
        return err.message;
      });
  };
  const signOutWithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
   return signOut(auth, provider)
      .then((res) => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        const currUser = getUser(usr);
        setUser(currUser);
      } else {
      }
    });
  }, []);

  return { user, signOutWithGoogle, signInWithGoogle };
};

export default Auths;
