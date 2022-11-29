import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Router from "next/router";

const Protected = () => {
  const { status, data } = useSession();

  console.log(data);

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "authenticated") {
    return (
      <div className="text-center flex flex-col justify-center items-center h-screen">
        <p className="text-green-600 font-medium text-xl">
          This page is Protected if you complete sign in , you can see this
          page.
        </p>
        <button
          className="mt-5 bg-red-200 rounded-md p-2 px-5 text-red-500 font-medium hover:text-white hover:bg-red-500 transition-colors delay-100 ease-linear"
          onClick={() => signOut({ redirect: false })}
        >
          Logout
        </button>
      </div>
    );
  }

  return <div className="">Loading...</div>;
};

export default Protected;
