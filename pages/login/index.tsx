import Head from 'next/head';
import Link from 'next/link';
export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center">Login</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
