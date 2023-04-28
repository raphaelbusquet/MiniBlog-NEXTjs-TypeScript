import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAciNf0hQ2DxNiucsNKhaw593a1OIZ43rY",
    authDomain: "miniblognext13.firebaseapp.com",
    projectId: "miniblognext13",
    storageBucket: "miniblognext13.appspot.com",
    messagingSenderId: "87706865913",
    appId: "1:87706865913:web:744e82a68d186b5d151228"
} 

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db };