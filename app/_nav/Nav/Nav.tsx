import Link from "next/link";
import React from "react";
import { Underline } from "../Underline";
import { config } from "../config";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ weight: "200", subsets: ["latin"] });

const Item = ({ children }: React.PropsWithChildren) => {
  return (
    <span className={`flex justify-center w-60 ${roboto.className}`}>
      {children}
    </span>
  );
};

const Nav = ({ children }: React.PropsWithChildren) => {
  return (
    <nav className="flex justify-center w-full bg-slate-800 text-slate-50 p-4 fixed shadow-[0_1px_1px_0_rgba(255,255,255,0.1)]">
      <div className="flex-row uppercase font-mono relative">
        <Item>
          <Link href={config[0].href}>{config[0].label}</Link>
        </Item>
        <Item>
          <Link href={config[1].href}>{config[1].label}</Link>
        </Item>
        <Underline />
      </div>
    </nav>
  );
};

export default React.memo(Nav);
