import Image from "next/image";
import { Page, Section } from "@composition/index";
import type { Metadata } from "next";

const Pill = ({ children }: React.PropsWithChildren) => {
  return <span className="py-1 px-2 rounded-md bg-slate-600">{children}</span>;
};

export const metadata: Metadata = {
  title: "Rory",
};

export default function Home() {
  return (
    <Page>
      <div className="gap-4">
        <Section>
          <div className="pt-10">
            <h1 className="text-4xl">Rory Roccio</h1>
            <span>
              <em className="not-italic">Software Engineer</em>
              <em className="not-italic">
                ⚡Fast 💄 Elegant 🧪 Tested 📝 Documented 📈 Scalable
              </em>
            </span>
          </div>
        </Section>

        <Section>
          <div className="gap-2">
            <h2 className="text-2xl">Skills</h2>

            <div className="border rounded-md p-2 border-slate-700 gap-2">
              <h3 className="text-lg">Languages</h3>
              <ul className="flex gap-1">
                <Pill>JavaScript</Pill>
                <Pill>TypeScript</Pill>
              </ul>
            </div>

            <div className="border rounded-md p-2 border-slate-700 gap-2">
              <h3 className="text-lg">Frameworks</h3>
              <ul className="flex gap-1">
                <Pill>React</Pill>
                <Pill>React Native</Pill>
                <Pill>Next.js</Pill>
                <Pill>Tailwind</Pill>
              </ul>
            </div>
          </div>
        </Section>

        <Section>
          <div>
            <h2 className="text-2xl">Experience</h2>

            <h3 className="text-lg">Carbon Health</h3>
          </div>
        </Section>

        <Section>
          <div>
            <h2 className="text-2xl">Projects</h2>

            <h3 className="text-lg">Carbon Health</h3>
          </div>
        </Section>
      </div>
    </Page>
  );
}
