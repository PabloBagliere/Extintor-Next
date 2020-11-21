import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

export default function NavBar(): JSX.Element {
  function showHidden(): void {
    setHidden(!hidden);
  }
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight text-gray-900">
            Extintores
          </span>
        </div>
        <div className="block lg:hidden">
          <Button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={showHidden}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Button>
        </div>
        <div
          className={
            hidden
              ? 'w-full block flex-grow lg:flex lg:items-center lg:w-auto'
              : 'w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden'
          }
        >
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-900 mr-4">
                Home
              </a>
            </Link>
            <Link href="/extintores">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-900 mr-4">
                Extintores
              </a>
            </Link>
            <Link href="/info">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-900 mr-4">
                Informacion
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
