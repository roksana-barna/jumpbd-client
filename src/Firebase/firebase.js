// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCydQcSRBepTCbJ8jkrwr8rhTwjl11Uyvw",
//   authDomain: "dropzey-fe002.firebaseapp.com",
//   projectId: "dropzey-fe002",
//   storageBucket: "dropzey-fe002.appspot.com",
//   messagingSenderId: "599659958851",
//   appId: "1:599659958851:web:55965ee330397890633af6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwyW8U60y6VxPf5YPj0c4vWu66W2EsGdI",
  authDomain: "jump-bd.firebaseapp.com",
  projectId: "jump-bd",
  storageBucket: "jump-bd.appspot.com",
  messagingSenderId: "894593599056",
  appId: "1:894593599056:web:29b085e6ba15454d373355",
  measurementId: "G-SD1CQ85Y86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;