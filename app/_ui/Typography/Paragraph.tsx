export const Paragraph = ({ children }: React.PropsWithChildren) => (
  <p className="text-base text-slate-300">{children}</p>
);

export const Highlight = ({ children }: React.PropsWithChildren) => (
  <em className="font-semibold text-amber-200">{children}</em>
);
