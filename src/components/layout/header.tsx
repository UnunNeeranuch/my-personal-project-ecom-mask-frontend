import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow grid grid-cols-6 py-2 px-4">
      <Link href="/" className="size-12 relative">
        <Image alt="mask" src="/icon.png" fill />
      </Link>
      Header
    </header>
  );
}
