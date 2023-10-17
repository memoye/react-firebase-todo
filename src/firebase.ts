import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const [apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId] =
  [
    import.meta.env.VITE_API_KEY,
    import.meta.env.VITE_AUTH_DOMAIN,
    import.meta.env.VITE_PROJECT_ID,
    import.meta.env.VITE_STORAGE_BUCKET,
    import.meta.env.VITE_MESSAGING_SENDER_ID,
    import.meta.env.VITE_APP_ID,
  ];

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore(app);
