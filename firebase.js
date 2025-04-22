
// إعداد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, remove } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjQ5FG5rDn7m5XY3iuDBt5xIMPeoJO5DQ",
  authDomain: "service-waiting.firebaseapp.com",
  databaseURL: "https://service-waiting-default-rtdb.firebaseio.com",
  projectId: "service-waiting",
  storageBucket: "service-waiting.appspot.com",
  messagingSenderId: "230656077357",
  appId: "1:230656077357:web:6cdfd397a5a7c04c5e52a4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onChildAdded, remove };
