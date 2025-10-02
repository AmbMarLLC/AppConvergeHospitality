"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setMessage(result.error);
    } else {
      setMessage("Sign-in successful!");
      router.push("/incidentReporting/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="max-w-5xl w-full">
        {/* Logo and Welcome Text */}
        <div className="text-center mb-10">
          <img
            src="/images/Logo.jpg"
            alt="Logo"
            className="w-[200px] mb-6 mx-auto"
          />
          <h1>
            Welcome to Converge Hospitality&apos;s <br />
            incident reporting platform
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <p>
              Efficiently manage and document incidents with ease. <br />
              This platform ensures a seamless reporting process, <br />
              streamlined communication, and enhanced <br />
              operational transparency.
            </p>
          </div>

          {/* Right Column - Sign In Form */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm p-8 rounded-2xl shadow-xl bg-white">
              <h1 className="text-3xl font-semibold text-center mb-6 text-[#5c9c45]">
                Sign In
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter your username"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c9c45]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c9c45]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 px-4 py-2 text-white bg-[#5c9c45] rounded-lg hover:bg-[#4a8238] transition"
                >
                  Sign In
                </button>
              </form>

              {message && (
                <p
                  className={`mt-4 text-center text-sm font-medium ${
                    message.includes("successful")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
