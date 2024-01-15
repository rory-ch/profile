import { monoMed } from "./fonts/mono-med";

export const Code = ({ children }: React.PropsWithChildren) => (
  <code
    className={`py-0.5 px-1.5 rounded-md bg-slate-700 text-xs ${monoMed.className}`}
  >
    {children}
  </code>
);
