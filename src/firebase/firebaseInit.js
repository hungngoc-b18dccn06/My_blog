import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzL3n8MXtuHsUVwsAhuzO4n_W31UAyC0E",
  authDomain: "myblog-a2be1.firebaseapp.com",
  projectId: "myblog-a2be1",
  storageBucket: "myblog-a2be1.appspot.com",
  messagingSenderId: "340380184938",
  appId: "1:340380184938:web:ba62c8cddfafd094327513",
  measurementId: "G-PJRMYW544C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
