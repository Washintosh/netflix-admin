import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgcZGMccJ_cMJElRgv_f88d6V2ku06OwU",
  authDomain: "netflix-8c4f8.firebaseapp.com",
  projectId: "netflix-8c4f8",
  storageBucket: "netflix-8c4f8.appspot.com",
  messagingSenderId: "685647963967",
  appId: "1:685647963967:web:a9c6037af63c2c4e92158a",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
