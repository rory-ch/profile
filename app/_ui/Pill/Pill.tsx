import { Roboto, Roboto_Mono } from "next/font/google";
import React from "react";

const robotoMono = Roboto_Mono({ weight: "500", subsets: ["latin"] });

const Pill = ({
  children,
  color,
}: React.PropsWithChildren<{
  color: "bg-emerald-700" | "bg-teal-700" | "bg-sky-700" | "bg-slate-600";
}>) => {
  return (
    <span
      className={`items-center gap-2 py-1 px-2 tracking-tight rounded-md text-sm ${color} ${robotoMono.className}`}
    >
      {children}
    </span>
  );
};

export default React.memo(Pill);
