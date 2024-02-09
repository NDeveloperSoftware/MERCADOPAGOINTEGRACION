
const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyB-oE9Ulm1jftaR1fYzc4GLaO8_6coQWE0",
  authDomain: "codershop-d36b8.firebaseapp.com",
  projectId: "codershop-d36b8",
  storageBucket: "codershop-d36b8.appspot.com",
  messagingSenderId: "422859356222",
  appId: "1:422859356222:web:9d8f12a2ec3bcdfb6a396f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };
