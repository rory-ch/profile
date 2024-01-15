import React from "react";
import { monoMed } from "../Typography/fonts/mono-med";

const Pill = ({
  children,
  color,
}: React.PropsWithChildren<{
  color: string;
}>) => {
  return (
    <span
      className={`items-center gap-2 py-1 px-2 tracking-tight rounded-md text-sm whitespace-nowrap ${color} ${monoMed.className}`}
    >
      {children}
    </span>
  );
};

export default React.memo(Pill);
