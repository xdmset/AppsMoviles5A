import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { app } from "./firebaseConfig";

export const auth = getAuth(app);

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};