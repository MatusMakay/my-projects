const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set , get, child} = require("firebase/database");

const {
  firebase_url,
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
} = require('../env/variables')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: firebase_url,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

module.exports ={
    app,
    db,
    ref,
    set,
    get,
    child,
}