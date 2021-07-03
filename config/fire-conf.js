import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC4akzfz4xHNIRZ_FzBhDjw2LnijZxIi3o',
  authDomain: 'rrankawat-next-blog.firebaseapp.com',
  projectId: 'rrankawat-next-blog',
  storageBucket: 'rrankawat-next-blog.appspot.com',
  messagingSenderId: '566194022663',
  appId: '1:566194022663:web:2a17b0017516c2ebd83da2',
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

export default firebase;
