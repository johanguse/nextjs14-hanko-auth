"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Hanko, register } from "@teamhanko/hanko-elements";

import { getHankoApiUrl } from "@/lib/utils/getHankoUrl";

const hankoApiUrl: string = getHankoApiUrl();

export default function HankoAuth() {
  const router = useRouter();

  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements")
      .then(({ Hanko }) => setHanko(new Hanko(hankoApiUrl)))
      .catch((error) =>
        console.error("Failed to import @teamhanko/hanko-elements.", error)
      );
  }, []);

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(async () => {
        router.replace("/dashboard");
      }),
    [hanko, router]
  );

  useEffect(() => {
    register(hankoApiUrl).catch((error) =>
      console.error("Failed to register translations.", error)
    );
  }, [hankoApiUrl]);

  return <hanko-auth />;
}
