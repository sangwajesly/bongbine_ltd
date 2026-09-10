import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Replace with the actual Firebase config once the project is created
const firebaseConfig = {
  apiKey: "AIzaSyB3Y1outwLl8ZbkK6_ICJP-49ud8FV7mPo",
  authDomain: "bongbine-ltd.firebaseapp.com",
  projectId: "bongbine-ltd",
  storageBucket: "bongbine-ltd.firebasestorage.app",
  messagingSenderId: "120135339033",
  appId: "1:120135339033:web:634f953f02cc28fd1e2e88",
  measurementId: "G-PXC76WD0X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
