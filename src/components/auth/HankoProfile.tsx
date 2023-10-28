"use client";

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

import { getHankoApiUrl } from "@/lib/utils/getHankoUrl";

const hankoApiUrl: string = getHankoApiUrl();

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApiUrl).catch((e) =>
      console.error("Error registering hanko element", e)
    );
  }, []);
  return <hanko-profile />;
}
