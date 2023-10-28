"use client";

import HankoProfile from "@/compoments/auth/HankoProfile";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function AccountProfile() {
  return (
    <div className="flex flex-col mt-20 gap-20">
      <main className="w-full flex justify-center">
        <div className="container items-center text-center">
          <h1 className="text-center mb-10">Profile</h1>
          <div className="flex justify-center">
            <HankoProfile />
          </div>
          <div className="mt-10">
            <Link href="/dashboard">Back to dashboard</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
