/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DTOBasicForm {
  className?: string;
  name: string;
  children?: (JSX.Element | string)[] | JSX.Element | string;
  error?: boolean;
  placeholder?: string;
  inputRef: any;
}
