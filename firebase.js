import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD1gIJD30VLntcu5DndQnce9xh1IqNR6Sw',
  authDomain: 'next-facebook-clone-196aa.firebaseapp.com',
  projectId: 'next-facebook-clone-196aa',
  storageBucket: 'next-facebook-clone-196aa.appspot.com',
  messagingSenderId: '323982944204',
  appId: '1:323982944204:web:8971962009e1f681255f69',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
