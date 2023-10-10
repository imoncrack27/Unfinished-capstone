import Head from "next/head";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { BiUser } from "react-icons/bi";

const Signup = () => {
  return (
    <div>
      <Head>
        <title>LSU Registrar Operational System</title>
        <link rel="icon" href="/LOGO.jpg" />
      </Head>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-96">
          <div className="text-left font-bold text-sm pb-6">
            <span className="text-green-500">La Salle University </span>
            Registrar Operational System
          </div>
          <h1 className="text-2xl font-semibold mb-4 text-center">Sign Up</h1>

          <form>
            <div className="mb-4">
              <BiUser className="pointer-events-none absolute text-gray-400 m-3.5" />
              <input
                type="text"
                id="name"
                className="border rounded-lg w-full py-2 px-8"
                placeholder="Name"
                required
              />
            </div>

            <div className="mb-4">
              <FaRegEnvelope className="pointer-events-none absolute text-gray-400 m-3.5" />
              <input
                type="email"
                id="email"
                className="border rounded-lg w-full py-2 px-8"
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
              <Link
                href="/"
                type="submit"
                className="text-center border-2 border-green-500 text-green-500 px-12 py-1.5 flex justify-center font-semibold rounded-full hover:bg-green-500 hover:text-white"
              >
                Sign Up
              </Link>
            </div>
          </form>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
