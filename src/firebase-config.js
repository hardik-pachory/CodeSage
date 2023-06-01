import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLUHO9aXevaao1U9PhRv4LvKU4s-OWYVE",
  authDomain: "codesage--main.firebaseapp.com",
  projectId: "codesage--main",
  storageBucket: "codesage--main.appspot.com",
  messagingSenderId: "855932390365",
  appId: "1:855932390365:web:d844eb47a4abd9114b0434",
  measurementId: "G-7EFYT4ESD5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);