import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await signIn("credentials" , {
      ...data,
      redirect :false
    })

    console.log(res)
  }

  return (
    <>
      {/* component */}
      <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-2xl font-medium">Login to your account</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-cyan-400 rounded-t-md" />
            <div className="px-8 py-6 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block font-semibold">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                />
                <label className="block mt-3 font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                />
                <div className="flex justify-between items-baseline">
                  <button
                    type="submit"
                    className="mt-4 bg-cyan-500 text-white py-2 px-6 rounded-md hover:bg-cyan-600 font-medium"
                  >
                    Login
                  </button>
                  <a href="#" className="text-sm hover:underline">
                    Forgot password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
