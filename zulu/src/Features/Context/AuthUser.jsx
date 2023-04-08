import React, { createContext } from "react";
import { auth, db } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const userAuth = createContext();
export const UserAuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const SignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, "InterestedList", email), () => {
        Favs: [];
      });
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  const SignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (Currentuser) =>
      setUser(Currentuser)
    );
    return ()=>unsub
  });
  const LogOut = async () => {
    try {
      await signOut();
      navigate("/signin");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <userAuth.Provider
      value={{ setEmail , setPassword , user , LogOut , SignUp , SignIn }}
    >
        {children}
    </userAuth.Provider>
  );
};

export default userAuth;
