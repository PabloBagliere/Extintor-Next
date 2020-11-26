import { useState } from 'react';
import Button from './Button';
import Links from './Links';
import Perfil from './Perfil';
import Notifications from './Notifications';
import LinksDTO from 'Utils/LinksDTO';
import useUser from 'hooks/useUser';

interface Props {
  links: LinksDTO[];
}

export default function NavBar({ links }: Props): JSX.Element {
  const user = useUser();

  function showHidden(): void {
    setHidden(!hidden);
  }
  const [hidden, setHidden] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={showHidden}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${hidden ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${hidden ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          <div className="flex-1 flex justify-center sm:items-stretch sm:justify-start">
            <div className=" flex-shrink-0">
              <span className="text-indigo-400 font-medium text-3xl">
                Extintor
              </span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {links.map((element: { href: string; text: string }, i) => {
                  return (
                    <Links
                      href={element.href}
                      className="text-sm px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                      text={element.text}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {user ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <>
                <Notifications />
                <Perfil />
              </>
            </div>
          ) : null}
        </div>
      </div>
      <div className={`sm:hidden ${hidden ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((element: { href: string; text: string }, i) => {
            return (
              <Links
                href={element.href}
                className="block text-base px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                text={element.text}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
}

/** TODO:
 * Unificar los render de links
 *  */
