import Image from "next/image";
import { Page, Section } from "@composition/index";

export default function Me() {
  return (
    <Page>
      <Section>
        <p className="text-white text-lg">some things about me</p>
      </Section>
    </Page>
  );
}
