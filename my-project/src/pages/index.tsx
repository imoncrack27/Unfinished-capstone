import Head from "next/head";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  return (
    <div>
      <Head>
        <title>LSU Registrar Operational System</title>
        <link rel="icon" href="/LOGO.jpg" />
      </Head>

      <main className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-6 w-full sm:w-96">
          <div className="text-left font-bold text-sm pb-6">
            <span className="text-green-500">La Salle University </span>
            Registrar Operational System
          </div>

          <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>

          <form>
            <div className="relative mb-4">
              <FaRegEnvelope className="pointer-events-none absolute text-gray-400 m-3.5" />
              <input
                type="email"
                id="email"
                className="border rounded-lg w-full py-2 px-8 "
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-4">
              <MdLockOutline className="pointer-events-none absolute text-gray-400 m-3.5" />
              <input
                type="password"
                id="password"
                className="border rounded-lg w-full py-2 px-8"
                placeholder="Password"
                required
              />
            </div>

            <div className="mb-4">
              <a
                href="documents"
                type="submit"
                className="text-center border-2 border-green-500 text-green-500 px-12 py-1.5 flex justify-center font-semibold rounded-full hover:bg-green-500 hover:text-white"
              >
                Login
              </a>
            </div>
          </form>

          <p className="text-center text-gray-600">
            Don't have an account?
            <Link href="signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
