"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const HankoAuth = dynamic(() => import("@/compoments/auth/HankoAuth"), {
  ssr: false,
});

export default async function RegisterPage() {
  return (
    <>
      <div className="flex flex-col mt-20 gap-20">
        <main className="w-full flex justify-center">
          <div className="container items-center text-center">
            <h1 className="text-center mb-10">Register</h1>
            <div className="flex justify-center">
              <HankoAuth />
            </div>
            <div className="mt-10">
              <Link href="/">Back to home</Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
