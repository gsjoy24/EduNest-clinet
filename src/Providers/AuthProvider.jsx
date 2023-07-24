import { createContext, useState, useEffect } from 'react';
import {
   getAuth,
   createUserWithEmailAndPassword,
   updateProfile,
   onAuthStateChanged,
   GoogleAuthProvider,
   GithubAuthProvider,
   signInWithPopup,
   signInWithEmailAndPassword,
   signOut,
   sendPasswordResetEmail
} from 'firebase/auth';

import { app } from '../Firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [colleges, setColleges] = useState([]);

   // create a new user
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // sign in user with google
   const continueWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   // sign in user with google
   const continueWithGitHub = () => {
      setLoading(true);
      return signInWithPopup(auth, gitHubProvider);
   };

   // login user with email and password
   const loginWithEmail = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // logout the user
   const logOutUser = () => {
      return signOut(auth);
   };

   // logout the user
   const resetPass = (email) => {
      return sendPasswordResetEmail(auth, email);
   };

   // update the user profile with name and photo
   const updateUserProfile = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo
      });
   };

   // observing the user state
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });

      return () => {
         return unsubscribe();
      };
   }, []);

   useEffect(() => {
      const fetchColleges = async () => {
         try {
            const apiUrl = 'http://localhost:5000/colleges';
            const response = await axios.get(apiUrl);
            const data = response.data;
            setColleges(data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };
      fetchColleges();
   }, []);

   const authInfo = {
      user,
      loading,
      setLoading,
      createUser,
      continueWithGoogle,
      continueWithGitHub,
      updateUserProfile,
      loginWithEmail,
      logOutUser,
      resetPass,
      colleges
   };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
