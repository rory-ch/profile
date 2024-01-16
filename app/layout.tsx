import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Nav } from "@app/_nav/Nav";
import { Page } from "@ui";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rory Roccio - Software Engineer",
  description: "Follow me for software engineering insights!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-800 text-slate-100 ${roboto.className}`}>
        <Nav />
        <Page>{children}</Page>
      </body>
    </html>
  );
}
