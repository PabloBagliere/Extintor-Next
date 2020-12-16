import Head from 'next/head';
import useUser, { USER_STATES } from 'hooks/useUser';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Modal from 'component/Modal';
import Button from 'component/Button';

export default function Dasboard(): JSX.Element {
  const [hidden, setHidden] = useState(false);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === USER_STATES.NOT_LOGGED) {
      router.replace('/');
    }
  }, [user, router]);

  function showHidden(): void {
    setHidden(!hidden);
  }
  return (
    <>
      <Head>
        <title>Dasboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full ">
          <Button
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={showHidden}
          >
            Nuevo extintor
          </Button>
          {hidden ? <Modal setHidden={showHidden} /> : null}
        </div>
      </div>
    </>
  );
}
