import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import  {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyArup9o-YnZTDnoESiVG5GyRzlVKugiNAc",
    authDomain: "react-announce-app.firebaseapp.com",
    projectId: "react-announce-app",
    storageBucket: "react-announce-app.appspot.com",
    messagingSenderId: "379498850860",
    appId: "1:379498850860:web:ac8b8d33258e77fadabf89"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {auth, db, storage}; 