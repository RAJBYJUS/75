import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyARFtpTY2SUJad60k6qh1ioNVMSV-EWT10",
  authDomain: "eride-33b86.firebaseapp.com",
  projectId: "eride-33b86",
  storageBucket: "eride-33b86.appspot.com",
  messagingSenderId: "306313512589",
  appId: "1:306313512589:web:9918192293457409f3c4c4"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
