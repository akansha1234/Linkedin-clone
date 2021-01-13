// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCIVUVji5COrEN32VwbXMQ0qLO4FZI2ICY",
    authDomain: "linkedin-clone-b24e1.firebaseapp.com",
    projectId: "linkedin-clone-b24e1",
    storageBucket: "linkedin-clone-b24e1.appspot.com",
    messagingSenderId: "312867275490",
    appId: "1:312867275490:web:facaa2226f29b9733e54bb",
    measurementId: "G-MMJQLLVWCJ"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  export {db,auth}