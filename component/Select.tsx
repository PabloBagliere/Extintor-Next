import { DTOBasicForm } from 'Utils/BasicInputForm';

export default function Select({
  children,
  className = '',
  error,
  inputRef,
  name,
}: DTOBasicForm): JSX.Element {
  let classDefault =
    'bg-white block p-0.5 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm | ';
  let classError =
    'bg-white block p-0.5 border focus:border-indigo-400 focus:outline-none border-red-500 sm:text-sm | ';
  if (className) {
    classDefault += className;
    classError += className;
  }
  return error ? (
    <select name={name} ref={inputRef} className={classError}>
      {children}
    </select>
  ) : (
    <select name={name} ref={inputRef} className={classDefault}>
      {children}
    </select>
  );
}
