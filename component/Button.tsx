import { DTOButton } from 'Utils/ButtonDTO';
import { typesButton } from 'Utils/Data';

export default function Button({
  className,
  onClick,
  children,
  type = typesButton.button,
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
