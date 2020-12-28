const firebaseConfig = {
  apiKey: 'AIzaSyD6j6Ku2wmtkwxWFYkfRdmZSEwPo2QWm6A',
  authDomain: 'takeoff-staff-f4204.firebaseapp.com',
  projectId: 'takeoff-staff-f4204',
  storageBucket: 'takeoff-staff-f4204.appspot.com',
  messagingSenderId: '172342023039',
  appId: '1:172342023039:web:69afd7f0b06c4533e4c04a',
};

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const authorization = firebaseApp.auth();
export const dataBase = firebaseApp.firestore();
