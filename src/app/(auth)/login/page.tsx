import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-xl w-full px-8">
        <div className="flex justify-center">
          <Image alt="mask" src="/icon.png" width={60} height={60} />
        </div>

        <h2 className="text-lg font-medium my-6">Login to Website</h2>
      </div>
    </div>
  );
}
