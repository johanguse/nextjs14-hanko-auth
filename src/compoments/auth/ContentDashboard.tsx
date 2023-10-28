import * as React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as jose from "jose";
import clsx from "clsx";

interface DashboardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardContent({
  children,
  className,
  ...props
}: DashboardContentProps) {
  const token = cookies().get("hanko")?.value;

  try {
    const payload = jose.decodeJwt(token ?? "");
    const userID = payload.sub;

    if (!userID || token === undefined) {
      redirect("/login");
    }

    return (
      <>
        <div className={clsx("flex flex-col gap-10", className)} {...props}>
          <main className="w-full flex justify-center">
            <div className="container py-12">{children}</div>
          </main>
        </div>
      </>
    );
  } catch (error) {
    redirect("/login");
  }
}
