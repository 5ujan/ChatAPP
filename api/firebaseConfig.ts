import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdSDbcoev5cIhvsR0uuWPcQjAlaLAHtiQ",
  authDomain: "ndg-mobile-new.firebaseapp.com",
  projectId: "ndg-mobile-new",
  storageBucket: "ndg-mobile-new.appspot.com",
  messagingSenderId: "1044673771419",
  appId: "1:1044673771419:web:4a52e9a0187c322728d33e",
  measurementId: "G-X98FPVF5P3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export default firebaseConfig;
