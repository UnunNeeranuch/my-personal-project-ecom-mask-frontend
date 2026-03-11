import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient rounded-md from-gray-500 to-gray-400 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-150 rounded-lg bg-white shadow-gray-300 border border-gray-100 px-10 py-12">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-17 w-17 items-center justify-center rounded-full bg-gradient- from-purple-500 to-pink-500 shadow-gray-300">
            👤
          </div>
        </div>

        {/* Title */}
        <div className="mt-2 h-15 w-full rounded-xl text-lg font-bold hover:opacity-90 flex items-center justify-center">
          <h1 className="text-3xl font-extrabold text-black flex justify-center items-center">
            Create Account
          </h1>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Firstname */}
          <div>
            <label className="block text-sm font-bold text-blue-950 mb-2">
              Firstname
            </label>
            <input
              type="text"
              placeholder="Your Firstname"
              className="h-15 w-full rounded-xl border border-gray-100 px-5 text-black focus:border-purple-500 focus:ring-4 focus:ring-gray-700"
            />
          </div>

          {/* Lastname */}
          <div>
            <label className="block text-sm font-bold text-blue-950 mb-2">
              Lastname
            </label>
            <input
              type="text"
              placeholder="Your Lastname"
              className="h-15 w-full rounded-xl border border-gray-100 px-5 text-black focus:border-purple-500 focus:ring-4 focus:ring-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold  text-blue-950 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="h-15 w-full rounded-xl border  border-gray-100 px-5 text-black focus:border-purple-500 focus:ring-4 focus:ring-gray-700"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-blue-950 mb-2">
              Password
            </label>
            <input
              type="password"
              // placeholder="••••••••"
              className="h-15 w-full rounded-xl border border-gray-100 px-5 text-black focus:border-purple-500 focus:ring-4 focus:ring-gray-700"
            />
          </div>

          {/* Confirm Password
          <div>
            <label className="block text-sm font-bold text-blue-950 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="h-15 w-full rounded-xl border border-gray-100 px-5 text-black focus:border-purple-500 focus:ring-4 focus:ring-gray-700"
            />
          </div> */}

          {/* Button */}
          <button
            type="submit"
            className="mt-4 h-15 w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-bold text-white shadow-lg hover:opacity-90"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-8 text-center text-gray-400">
          Already have an account?{' '}
          <span className="text-purple-500 font-bold cursor-pointer">
            Sign in here
          </span>
        </p>
      </div>
    </div>
  );
}
