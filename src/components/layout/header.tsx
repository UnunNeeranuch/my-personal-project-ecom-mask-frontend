import Image from 'next/image';
import Link from 'next/link';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../ui/input-group';
import { Search } from 'lucide-react';
import { NativeSelect, NativeSelectOption } from '../ui/native-select';

export default function Header() {
  return (
    <header className="fixed top-0 z-9999 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt="Mask"
            width={52}
            height={52}
            className="h-13 w-13 rounded-full object-cover"
          />

          <nav className="m-25 flex gap-10">
            <Link
              href="/"
              className="text-lg font-medium text-gray-600 transition hover:text-purple-500"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="text-lg font-medium text-gray-600 transition hover:text-purple-500"
            >
              Product
            </Link>
          </nav>
        </div>

        <div>
          <nav className="m-25 flex gap-10">
            <Link
              href="/products"
              className="text-lg font-medium text-gray-600 "
            ></Link>

            <InputGroup className="max-w-2xl w-250 h-10 mt-2">
              <InputGroupInput placeholder="Search mask..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>

            <Link
              href="/carts"
              className="text-lg font-medium text-gray-600 flex justify-center items-center"
            >
              <Image
                src="/cart-icon.png"
                alt="Cart"
                width={12}
                height={12}
                className="h-10 w-10 rounded-full object-cover "
              />
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/register"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2.5 text-base font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Register
          </Link>

          <Link
            href="/login"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2.5 text-base font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Login
          </Link>

          {/* <button className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2.5 text-base font-semibold text-white shadow-md transition hover:opacity-90">
            Logout
          </button> */}
        </div>
      </div>
    </header>
  );
}
