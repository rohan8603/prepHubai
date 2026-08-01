import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKe5fZfnh7UJLmFf60yoJxKE8YAp49gSU",
  authDomain: "prephub-ai.firebaseapp.com",
  projectId: "prephub-ai",
  storageBucket: "prephub-ai.firebasestorage.app",
  messagingSenderId: "1073321126355",
  appId: "1:1073321126355:web:03adef2c064333d8b5e726"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);