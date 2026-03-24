import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7zI1LfZzXd1vKkhY2udubKIkTSFJWgFw",
  authDomain: "flavor-flow-logistics.firebaseapp.com",
  projectId: "flavor-flow-logistics",
  storageBucket: "flavor-flow-logistics.firebasestorage.app",
  messagingSenderId: "46968057216",
  appId: "1:46968057216:web:311b62c9edc03a4c352565",
  measurementId: "G-LGN3CZTSZB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
