import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAEfDripy9D95gh3KjhMPGPQaJg5JEN_3U",
    authDomain: "sometests-d2c53.firebaseapp.com",
    projectId: "sometests-d2c53",
    storageBucket: "sometests-d2c53.appspot.com",
    messagingSenderId: "757907945613",
    appId: "1:757907945613:web:2995c11aa2d6d8faf70ac4"
} 

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db };