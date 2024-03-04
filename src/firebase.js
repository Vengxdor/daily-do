// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB29tFR_M3LlG9lEoplx29Vo8eV4_-di_U',
  authDomain: 'todo-app-d5899.firebaseapp.com',
  projectId: 'todo-app-d5899',
  storageBucket: 'todo-app-d5899.appspot.com',
  messagingSenderId: '325152296277',
  appId: '1:325152296277:web:a17c8a7f471ddd7ffbf3dc',
  measurementId: 'G-MBHRJ80M4P'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
