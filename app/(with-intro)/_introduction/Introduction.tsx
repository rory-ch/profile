import Image from "next/image";
import { H1, Pill } from "@ui";
import avatar from "@assets/avatar.jpg";
import github from "@assets/logos/github-mark-white.svg";

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
      <em className="text-sm flex flex-row flex-wrap gap-x-2">
        Code that is
        <span className="gap-1">
          <span>⚡ fast</span>
          <span>💄 elegant</span>
          <span>🧪 tested</span>
        </span>
        <span className="gap-1">
          <span>📝 documented</span> 📈 scalable
        </span>
      </em>
    </div>
    <span className="gap-2 flex-wrap">
      <a href="https://github.com/rory-ch">
        <Pill color="bg-slate-700">
          <Image src={github} height={20} width={20} alt="GitHub OctoCat" />
          rory-ch
        </Pill>
      </a>
      <a href="mailto:rory.roccio@gmail.com">
        <Pill color="bg-slate-700">rory.roccio@gmail.com</Pill>
      </a>
    </span>
  </div>
);
