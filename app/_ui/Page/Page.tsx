import React from "react";

const Page = ({ children }: React.PropsWithChildren) => (
  <main className="flex flex-col bg-slate-800 w-full min-h-screen pt-14 mb-2">
    {children}
  </main>
);

export default React.memo(Page);
