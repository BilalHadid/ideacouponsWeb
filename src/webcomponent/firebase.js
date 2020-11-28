import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLgepBSysZM518d_pj9dKXIwNY7nzcUUM",
  authDomain: "ideacouponsdatabase.firebaseapp.com",
  databaseURL: "https://ideacouponsdatabase.firebaseio.com",
  projectId: "ideacouponsdatabase",
  storageBucket: "ideacouponsdatabase.appspot.com",
  messagingSenderId: "62178724382",
  appId: "1:62178724382:web:f63e23e134cabbd9d1fc0f",
  measurementId: "G-85H3WCDDBN",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
