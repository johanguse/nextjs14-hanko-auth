"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";

import { getHankoApiUrl } from "@/lib/utils/getHankoUrl";
import { Button } from "@/components/ui/button";

const hankoApiUrl: string = getHankoApiUrl();

export function LogoutButton() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements")
      .then(({ Hanko }) => setHanko(new Hanko(hankoApiUrl)))
      .catch((error) =>
        console.error("Failed to import @teamhanko/hanko-elements.", error)
      );
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          logout().catch((error) =>
            console.error("Error during logout:", error)
          );
        }}
      >
        Logout
      </Button>
    </>
  );
}
