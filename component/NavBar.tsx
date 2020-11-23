import { useState } from 'react';
import Button from './Button';
import Links from './Links';
import LinksDTO from 'Utils/LinksDTO';

interface Props {
  links: LinksDTO[];
}

export default function NavBar({ links }: Props): JSX.Element {
  function showHidden(): void {
    setHidden(!hidden);
  }
  const [hidden, setHidden] = useState(false);
  return (
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
          {links.map((element: { href: string; text: string }, i) => {
            return <Links href={element.href} text={element.text} key={i} />;
          })}
        </div>
      </div>
    </nav>
  );
}
