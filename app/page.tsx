/* eslint-disable react/no-unescaped-entities */
import { Page, Section, Pill } from "@app/_ui";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rory",
};

const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

const SkillLevel = ({ children }: React.PropsWithChildren) => (
  <em className={`not-italic text-xs ${robotoMono.className}`}>{children}</em>
);

const SkillPill = ({ skill, level }: { skill: string; level: string }) => (
  <Pill color={level === "expert" ? "bg-emerald-700" : "bg-amber-700"}>
    {skill} <SkillLevel>{level}</SkillLevel>
  </Pill>
);

const Group = ({ children }: React.PropsWithChildren) => (
  <div className="border rounded-md p-2 border-slate-700 gap-2">{children}</div>
);

const H1 = ({ children }: React.PropsWithChildren) => (
  <h1 className="text-4xl">{children}</h1>
);

const H2 = ({ children }: React.PropsWithChildren) => (
  <h2 className="text-2xl">{children}</h2>
);

const H3 = ({ children }: React.PropsWithChildren) => (
  <h3 className="text-lg">{children}</h3>
);

const Code = ({ children }: React.PropsWithChildren) => (
  <code className="py-0.5 px-1 rounded-sm bg-slate-700">{children}</code>
);

export default function Home() {
  return (
    <Page>
      <div className="gap-4">
        <Section>
          <div className="pt-10">
            <H1>Rory Roccio</H1>
            <span>
              <em className="not-italic">Software Engineer</em>
              <em className="not-italic">
                ⚡ Fast 💄 Elegant 🧪 Tested 📝 Documented 📈 Scalable
              </em>
            </span>
          </div>
        </Section>

        <Section>
          <div className="gap-2">
            <H2>Skills</H2>

            <Group>
              <H3>Languages</H3>
              <ul className="flex flex-wrap gap-1">
                <SkillPill skill="JavaScript" level="expert" />
                <SkillPill skill="TypeScript" level="expert" />
                <SkillPill skill="Scala" level="some" />
                <SkillPill skill="Kotlin" level="some" />
                <SkillPill skill="Python" level="some" />
              </ul>
            </Group>

            <Group>
              <H3>Frameworks</H3>
              <ul className="flex flex-wrap gap-1">
                <SkillPill skill="React" level="expert" />
                <SkillPill skill="React Native" level="expert" />
                <SkillPill skill="Next.js" level="expert" />
                <SkillPill skill="Tailwind" level="expert" />
              </ul>
            </Group>
          </div>
        </Section>

        <Section>
          <div className="gap-2">
            <h2 className="text-2xl">Experience</h2>

            <Group>
              <H3>Carbon Health</H3>
              <strong>🏢 San Francisco 📅 Aug 2020 - January 2024</strong>
              <ul className="flex flex-col gap-2 list-disc ml-4">
                <li>
                  Collaborate with design, product, marketing, engineering to
                  develop product specifications
                </li>
                <li>
                  Build new features for and maintain:
                  <dl className="ml-4">
                    <dt className="mt-2">
                      <Link
                        href="https://carbonhealth.com"
                        className="underline text-blue-400"
                      >
                        carbonhealth.com
                      </Link>
                    </dt>
                    <dd>
                      A <Code>Next.js</Code> application which functions as the
                      company's primary patient conversion tool{" "}
                    </dd>
                    <dt className="mt-2">
                      <Link
                        href="https://apps.apple.com/us/app/carbon-health-medical-care/id1152807572"
                        className="underline text-blue-400"
                      >
                        Carbon Health - Medical Care
                      </Link>
                    </dt>
                    <dd>application</dd>
                    <dt className="mt-2">
                      <Link
                        href="https://apps.apple.com/us/app/carbon-health-for-providers/id1153040105"
                        className="underline text-blue-400"
                      >
                        Carbon Health - For Providers
                      </Link>
                    </dt>
                    <dd>application</dd>
                  </dl>
                </li>
              </ul>
            </Group>
          </div>
        </Section>

        <Section>
          <div>
            <H2>Projects</H2>

            <h3 className="text-lg">Carbon Health</h3>
          </div>
        </Section>
      </div>
    </Page>
  );
}
