import Head from 'next/head';
import Link from 'next/link';
import NavBar from 'component/NavBar';
import LinksDTO from 'Utils/LinksDTO';

export default function Home(): JSX.Element {
  const Links: Array<LinksDTO> = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/extintores',
      text: 'Extintores',
    },
    {
      href: '/info',
      text: 'Informacion',
    },
  ];
  return (
    <div className="bg-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar props={Links} />
      <main>
        <h1 className="text-gray-900">Hola mundo</h1>
        <Link href="/login">Login</Link>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}
