import { Section } from "@ui";
import { Introduction } from "./_introduction/Introduction";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Section>
        <Introduction />
        <span className="h-6" />
      </Section>
      {children}
    </>
  );
}
