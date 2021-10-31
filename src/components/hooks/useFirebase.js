import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  // useStates
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // google sign in function
  const signInUsingGoogle = () => {
      setIsLoading(true);
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
  };

  // observe user state change
  useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              setUser({});
          }
          setIsLoading(false);
      });
      return () => unsubscribed;
  }, []);

  // sign out function
  const logOut = () => {
      signOut(auth)
          .then(() => {})
          .finally(() => setIsLoading(false));
  };

  return {
      user,
      signInUsingGoogle,
      logOut,
      isLoading,
  };
};

export default useFirebase;