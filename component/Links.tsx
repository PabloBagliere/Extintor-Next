import Link from 'next/link';
import LinksDTO from 'Utils/LinksDTO';

export default function Links({
  className = 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-900 mr-4',
  href,
  text,
}: LinksDTO): JSX.Element {
  return (
    <Link href={href}>
      <a className={className}>{text}</a>
    </Link>
  );
}
