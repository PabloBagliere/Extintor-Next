import { MouseEventHandler } from 'react';

export default interface DTOButton {
  className?: string;
  onClick: MouseEventHandler;
  children: JSX.Element;
}
