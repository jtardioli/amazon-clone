import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9BNZKBPqNpgICeQdyLKlEFfSwlcFB7SY",
  authDomain: "clone-f0897.firebaseapp.com",
  projectId: "clone-f0897",
  storageBucket: "clone-f0897.appspot.com",
  messagingSenderId: "565928903944",
  appId: "1:565928903944:web:ae96c54d796b8d414f58bd",
  measurementId: "G-LPEH7CK2DL",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

export { db, auth };
