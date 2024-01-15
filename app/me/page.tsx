import { Paragraph, Section } from "@ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rory Roccio - Software Engineer",
};

export default function Me() {
  return (
    <div className="gap-6">
      <Section>
        <div className="gap-2">
          <Paragraph>
            I do code for fun but I also like other things! I like camping,
            running, hiking, and generally being outdoors. Travelling is when I
            feel most alive. I am a Los Angeles native but I speak 🇷🇺 Russian
            fluently. Guess which language I have an accent in?
          </Paragraph>
          <Paragraph>
            Please feel free to contact to talk about job opportunities,
            collaboration or anything else!
          </Paragraph>

          <Paragraph>
            Thanks for reading,
            <br />
            Rory
          </Paragraph>
        </div>
      </Section>
    </div>
  );
}
