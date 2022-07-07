import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1uYhH5bYzbP85PDKwutOkFqyvDSYHp_4",
  authDomain: "meals-to-go-9f6de.firebaseapp.com",
  projectId: "meals-to-go-9f6de",
  storageBucket: "meals-to-go-9f6de.appspot.com",
  messagingSenderId: "419144687550",
  appId: "1:419144687550:web:252650e6de5643d91263ef",
  measurementId: "G-4T11NWMSP8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
