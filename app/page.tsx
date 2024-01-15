/* eslint-disable react/no-unescaped-entities */
import { Page, Section, Pill } from "@app/_ui";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import carbonHealthLogo from "./_assets/carbon-health-logo.svg";
import avatar from "./_assets/face.jpg";

export const metadata: Metadata = {
  title: "Rory",
};

const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

const SkillLevel = ({ children }: React.PropsWithChildren) => (
  <em className={`text-xs ${robotoMono.className}`}>{children}</em>
);

type Expertise = "expert" | "good" | "novice";

const getBgByExpertise = (expertise?: Expertise) => {
  switch (expertise) {
    case "expert":
      return "bg-emerald-700";
    case "good":
      return "bg-teal-700";
    case "novice":
      return "bg-sky-700";
    default:
      return "bg-slate-600";
  }
};

const SkillPill = ({ skill, level }: { skill: string; level?: Expertise }) => (
  <Pill color={getBgByExpertise(level)}>
    {skill}
    {level ? <SkillLevel>{level}</SkillLevel> : null}
  </Pill>
);

const TagList = ({ children }: React.PropsWithChildren) => (
  <ul className="flex flex-wrap gap-1">{children}</ul>
);

const Group = ({ children }: React.PropsWithChildren) => (
  <div className="border rounded-md p-2 border-slate-700 gap-2">{children}</div>
);

const H1 = ({ children }: React.PropsWithChildren) => (
  <h1 className="text-5xl">{children}</h1>
);

const H2 = ({ children }: React.PropsWithChildren) => (
  <h2 className="text-3xl">{children}</h2>
);

const H3 = ({ children }: React.PropsWithChildren) => (
  <h3 className="text-xl">{children}</h3>
);

const Code = ({ children }: React.PropsWithChildren) => (
  <code
    className={`py-0.5 px-1.5 rounded-md bg-slate-700 text-xs ${robotoMono.className}`}
  >
    {children}
  </code>
);

const Logo = ({ src }: { src: any }) => (
  <Image src={src} height={20} width={20} alt="" aria-hidden />
);

export default function Home() {
  return (
    <Page>
      <div className="gap-6">
        <Section>
          <div className="gap-2 pt-10">
            <span className="items-center gap-2">
              <Image
                src={avatar}
                height={363}
                width={363}
                className="rounded-full shrink-0 grow-0 w-12 h-12"
                alt="Rory Roccio"
              />
              <H1>Rory Roccio</H1>
            </span>
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
              <TagList>
                <SkillPill skill="JavaScript" level="expert" />
                <SkillPill skill="TypeScript" level="expert" />
                <SkillPill skill="Node.js" level="expert" />
                <SkillPill skill="Scala" level="novice" />
                <SkillPill skill="Kotlin" level="novice" />
                <SkillPill skill="Python" level="novice" />
              </TagList>
            </Group>

            <Group>
              <H3>Frameworks</H3>
              <TagList>
                <SkillPill skill="React" level="expert" />
                <SkillPill skill="React Native" level="expert" />
                <SkillPill skill="Next.js" level="expert" />
                <SkillPill skill="Tailwind" level="expert" />
                <SkillPill skill="Apollo GraphQL" level="expert" />
              </TagList>
            </Group>

            <Group>
              <H3>Persistence</H3>
              <TagList>
                <SkillPill skill="Postgres" level="good" />
                <SkillPill skill="Redis" level="novice" />
              </TagList>
            </Group>

            <Group>
              <H3>Other</H3>
              <TagList>
                <SkillPill skill="Browser APIs 💻" level="expert" />
                <SkillPill skill="Web a11y ♿" level="expert" />
                <SkillPill skill="Localization 🌐" level="expert" />
                <SkillPill skill="Cypress 🧪" />
                <SkillPill skill="Jest 🧪" />
                <SkillPill skill="Teaching 📖" />
              </TagList>
            </Group>
          </div>
        </Section>

        <Section>
          <div>
            <H2>Projects</H2>
            <h3 className="text-lg">Carbon Health</h3>
          </div>
        </Section>

        <Section>
          <div className="gap-2">
            <H2>Experience</H2>

            <Group>
              <span className="gap-2">
                <Image
                  src={carbonHealthLogo}
                  width={20}
                  height={20}
                  alt="Carbon Health logo"
                />

                <H3>Carbon Health, Software Engineer II</H3>
              </span>
              <em>🏢 San Francisco 📅 Aug 2020 - January 2024</em>
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
                    <dd>
                      A <Code>React Native</Code> application built for iOS,
                      Android, and web browsers which allows patients to
                      interact with their Care Providers, view medical history,
                      and schedule visits.
                    </dd>
                    <dt className="mt-2">
                      <Link
                        href="https://apps.apple.com/us/app/carbon-health-for-providers/id1153040105"
                        className="underline text-blue-400"
                      >
                        Carbon Health - For Providers
                      </Link>
                    </dt>
                    <dd>
                      A <Code>React Native</Code> application built for iOS and
                      web browsers which allows clinic staff to chart visits,
                      record medical history, share medical documents, interact
                      with their Patients, and much more.
                    </dd>
                  </dl>
                </li>
                <li>
                  Respond to critical production bugs and other emergencies by
                  triaging, documenting, delegating, and fixing directly.
                </li>
              </ul>
              <TagList>
                <SkillPill skill="TypeScript" />
                <SkillPill skill="Next.js" />
                <SkillPill skill="React Native" />
                <SkillPill skill="Node" />
                <SkillPill skill="Postgres" />
                <SkillPill skill="Scala" />
                <SkillPill skill="Kotlin" />
                <SkillPill skill="GraphQL" />
              </TagList>
            </Group>
            <Group>
              <H3>Hack Reactor</H3>
              <em>🏢 San Francisco 📅 January 2020 - April 2020</em>
              <p>
                Completed a full-stack software engineering boot camp based on
                the MERN stack.
              </p>
              <TagList>
                <SkillPill skill="JavaScript" />
                <SkillPill skill="React" />
                <SkillPill skill="Node" />
                <SkillPill skill="Express" />
                <SkillPill skill="MonogoDB" />
                <SkillPill skill="MySQL" />
              </TagList>
            </Group>
          </div>
        </Section>
      </div>
    </Page>
  );
}
