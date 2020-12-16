import { MouseEventHandler } from 'react';
import { typesButton } from './Data';

export interface DTOButton {
  className?: string;
  onClick?: MouseEventHandler;
  type?: typesButton;
  disable?: boolean;
  children: (JSX.Element | string)[] | JSX.Element | string;
}
