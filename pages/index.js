import React from "react";
import { signIn } from "next-auth/react";

const Index = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <button
        className="mt-4 bg-cyan-500 text-white py-2 px-6 rounded-md hover:bg-cyan-600 font-medium"
        onClick={() => signIn()}
      >
        Login
      </button>
    </div>
  );
};

export default Index;
