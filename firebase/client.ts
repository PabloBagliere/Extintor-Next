import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import { Dispatch, SetStateAction } from 'react';
import DTOExtinguisher from 'Utils/ExtinguisherDTO';

const firebaseConfig = {
  apiKey: 'AIzaSyBm23mw0VqscNF6xPRHwE4GABxynoi9Mcw',
  authDomain: 'next-extintor.firebaseapp.com',
  databaseURL: 'https://next-extintor.firebaseio.com',
  projectId: 'next-extintor',
  storageBucket: 'next-extintor.appspot.com',
  messagingSenderId: '744780154896',
  appId: '1:744780154896:web:3834f0fb3663d66b066295',
  measurementId: 'G-ZGSEMP7Z30',
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export function onAuthStateChanged(
  onChange: Dispatch<SetStateAction<undefined | null | firebase.User>>
): firebase.Unsubscribe {
  return firebase.auth().onAuthStateChanged((user) => {
    return onChange(user);
  });
}

export function signOut(): Promise<void> {
  console.log('cerrando sesion');
  return firebase.auth().signOut();
}

export function createExtinguisher(data: DTOExtinguisher): void {
  if (typeof data.photo == 'string') return;
  const updatePhoto = (value: string | File): void => {
    data.photo = value;
  };
  const functionComplet = (): void => {
    task.snapshot.ref.getDownloadURL().then(updatePhoto);
    console.log('isComplet');
  };
  const task = uploadImage(data.photo);
  task.on(
    'state_changed',
    null,
    (error) => {
      console.log(error);
    },
    functionComplet
  );
}

export function loginEmail(
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function uploadImage(file: File): firebase.storage.UploadTask {
  const ref = firebase.storage().ref(`image/${file.name}`);
  const task = ref.put(file);
  return task;
}
