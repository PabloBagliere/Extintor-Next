import { MouseEventHandler } from 'react';

export enum types {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}
export interface DTOButton {
  className?: string;
  onClick?: MouseEventHandler;
  type?: types;
  disable?: boolean;
  children: (JSX.Element | string)[] | JSX.Element | string;
}
