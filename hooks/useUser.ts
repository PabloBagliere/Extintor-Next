import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/client';
import firebase from 'firebase/index';

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser(): firebase.User | undefined | null {
  const [user, setUser] = useState<firebase.User | undefined | null>(
    USER_STATES.NOT_KNOWN
  );

  useEffect(() => onAuthStateChanged(setUser), []);

  return user;
}
