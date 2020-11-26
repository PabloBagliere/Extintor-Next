import { DTOButton, types } from 'Utils/ButtonDTO';

export default function Button({
  className,
  onClick,
  children,
  type = types.button,
  disable = false,
}: DTOButton): JSX.Element {
  return (
    <button
      type={type}
      disabled={disable}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
