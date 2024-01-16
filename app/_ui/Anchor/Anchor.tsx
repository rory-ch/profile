import React from "react";

const Anchor = ({
  href,
  className = "",
  children,
}: React.PropsWithChildren<{ href: string; className?: string }>) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className={`underline ${className || ""}`}
  >
    {children}
  </a>
);

export default React.memo(Anchor);
