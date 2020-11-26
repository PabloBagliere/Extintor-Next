import { useState } from 'react';
import { signOut } from 'firebase/client';
import Button from './Button';
import Links from './Links';

export default function Perfil(): JSX.Element {
  function showHidden(): void {
    setHidden(!hidden);
  }

  const [hidden, setHidden] = useState(false);

  return (
    <div className="ml-3 relative">
      <div>
        <Button
          className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-haspopup="true"
          onClick={showHidden}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Button>
      </div>
      <div
        className={`origin-top-right absolute flex flex-col right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${
          hidden ? '' : 'hidden'
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <Links
          href="/dasboard"
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
          text="Dasboard"
        />
        <Button
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
          onClick={signOut}
        >
          Cerrar sesion
        </Button>
      </div>
    </div>
  );
}
