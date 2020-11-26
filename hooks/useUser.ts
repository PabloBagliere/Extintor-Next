import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/client';
import firebase from 'firebase/index';

export default function useUser(): firebase.User | null {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => onAuthStateChanged(setUser), []);

  return user;
}
