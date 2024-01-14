import React from "react";

const Section = ({ children }: React.PropsWithChildren) => (
  <section className="flex justify-center px-4">
    <div className="max-w-4xl w-full">{children}</div>
  </section>
);

export default React.memo(Section);
