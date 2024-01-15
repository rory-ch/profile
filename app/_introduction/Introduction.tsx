import Image from "next/image";
import Link from "next/link";
import { Pill } from "@ui/Pill";
import { H1 } from "@ui/Typography";
import avatar from "@app/_assets/avatar.jpg";
import github from "@app/_assets/logos/github-mark-white.svg";

export const Introduction = () => (
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
    <div className="sm:flex-col flex-wrap">
      <em className="text-lg text-slate-300 tracking-wider">
        Software Engineer
      </em>
      <em className="text-sm flex flex-row flex-wrap">
        Code that is <span>⚡ fast</span> <span>💄 elegant</span>{" "}
        <span>🧪 tested</span> <span>📝 documented</span> 📈 scalable
      </em>
    </div>
    <span className="gap-2 flex-wrap">
      <Link href="https://github.com/rory-ch">
        <Pill color="bg-slate-700">
          <Image src={github} height={20} width={20} alt="GitHub OctoCat" />
          rory-ch
        </Pill>
      </Link>
      <Link href="mailto:rory.roccio@gmail.com">
        <Pill color="bg-slate-700">rory.roccio@gmail.com</Pill>
      </Link>
    </span>
  </div>
);
