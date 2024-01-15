/* eslint-disable react/no-unescaped-entities */
import { Page, Section, Pill } from "@app/_ui";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import carbonHealthLogo from "./_assets/carbon-health-logo.svg";
import { H1, H2, H3 } from "./_ui/Typography/Heading";
import { Code } from "./_ui/Typography/Code";
import { monoLight } from "./_ui/Typography/fonts/mono-light";
import { Highlight, Paragraph } from "./_ui/Typography";
import { Introduction } from "./_introduction/Introduction";
// import { bookingDemo } from "./_assets/carbon-health-booking-demo.webm";

export const metadata: Metadata = {
  title: "Rory",
};

const SkillLevel = ({ children }: React.PropsWithChildren) => (
  <em className={`text-xs ${monoLight.className}`}>{children}</em>
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
  <div className="border rounded-md p-3 border-slate-700 gap-2 bg-slate-900/20">
    {children}
  </div>
);

export default function Home() {
  return (
    <Page>
      <div className="gap-6">
        <Section>
          <Introduction />
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
          <div className="gap-2">
            <H2>Projects</H2>
            <Group>
              <H3>Los Angeles COVID Vaccine Distribution</H3>
              <em>📅 December 2020 - April 2021</em>
              <Paragraph>
                I personally built the public facing web page for scheduling
                COVID-19 vaccinations for the County of Los Angeles, which, at
                its peak, received{" "}
                <Highlight>264 thousand views per day</Highlight>. This project
                is the one I am most proud of. My team operated under very tight
                deadlines with rapidly changing requirements. We had heavy
                pressure from the mayor and from county residents who after a
                year of the pandemic, were bursting with anticipation to get
                vaccinated. This was a very important lesson in scaling and
                managing user traffic which I will never forget.
              </Paragraph>
              <a
                href="https://web.archive.org/web/20210401011258/https://carbonhealth.com/covid-19-vaccines/los-angeles"
                className="self-start"
              >
                <Pill color="bg-indigo-700">
                  View project in the archive ↗️
                </Pill>
              </a>
            </Group>
            <Group>
              <H3>Core Appointment Scheduling Flow Rebuild</H3>
              <em>📅 January 2023 - December 2023</em>
              <Paragraph>
                With close collaboration with design, product, data science, and
                engineering teams, I built what is now the company's primary
                visit scheduling flow. Features include clinic and time
                selection, account creation, logging in, drop-off email flow,
                family member selection, cancelling, and rescheduling.
              </Paragraph>
              <Paragraph>
                This flow is responsible for almost all of the company's
                user-initiated visit scheduling.
              </Paragraph>
              <video controls className="rounded-md">
                <source src="/videos/carbon-health-booking-demo.webm" />
              </video>
            </Group>
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

                <H3>Carbon Health, Software Engineer II, Growth</H3>
              </span>
              <em>🏢 San Francisco / Remote 📅 Aug 2020 - January 2024</em>
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
              <span className="gap-2">
                <Image
                  src={carbonHealthLogo}
                  width={20}
                  height={20}
                  alt="Carbon Health logo"
                />

                <H3>Carbon Health, Software Engineer II, Growth</H3>
              </span>
              <em>🏢 San Francisco 📅 January 2020 - April 2020</em>
              <Paragraph>
                Completed a full-stack software engineering boot camp based on
                the MERN stack.
              </Paragraph>
              <TagList>
                <SkillPill skill="JavaScript" />
                <SkillPill skill="React" />
                <SkillPill skill="Node" />
                <SkillPill skill="Express" />
                <SkillPill skill="MonogoDB" />
                <SkillPill skill="MySQL" />
              </TagList>
            </Group>
            <Group>
              <H3>Kroll, Investigations</H3>
              <em>🏢 San Francisco 📅 May 2018 - May 2020</em>
            </Group>
            <Group>
              <H3>
                U.S. Marine Corps, Sergeant, Cryptolinguistics & Amphibious
                Reconnaissance
              </H3>
              <em>📅 August 2010 - August 2015</em>
            </Group>
          </div>
        </Section>
        <Section>
          <div className="gap-2">
            <H2>Education</H2>

            <Group>
              <H3>Middlebury Institute of International Studies</H3>
              <em>🏫 Monterey, CA 📅 May 2016 - August 2015</em>
            </Group>

            <Group>
              <H3>Kazan Federal University</H3>
              <em>🏫 Kazan, Tatarstan, Russia 📅 September 2015 - May 2016</em>
            </Group>
          </div>
        </Section>
      </div>
    </Page>
  );
}
