import { DTOSelect } from 'Utils/SelectDTO';

export default function Select({
  children,
  className = '',
  error,
}: DTOSelect): JSX.Element {
  let classDefault =
    'bg-white block p-0.5 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm | ';
  let classError =
    'bg-white block p-0.5 border focus:border-indigo-400 focus:outline-none border-red-500 sm:text-sm | ';
  if (className) {
    classDefault += className;
    classError += className;
  }
  return error ? (
    <select className={classError}>{children}</select>
  ) : (
    <select className={classDefault}>{children}</select>
  );
}
