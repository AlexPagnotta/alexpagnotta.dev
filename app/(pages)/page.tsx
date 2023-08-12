import { cx } from "class-variance-authority";

import WildLogoSVG from "~/assets/svg/wild-logo.svg";
import { Text } from "~/features/ui/text";

export default function Home() {
  return (
    <div className="flex flex-col items-end gap-72 lg:gap-96">
      <Text size="title-1" asChild className="relative whitespace-pre-wrap text-right text-theme-color-text-secondary">
        <h1>
          Hello, I’m <span className="text-theme-color-text-primary">Alex Pagnotta</span>,{"\n"}a Frontend Developer
          from Italy.{"\n"}
          <span className="hidden lg:inline">Currently building </span>
          <span className="lg:hidden">Building </span>
          <span className="whitespace-nowrap">
            things at <span className="inline-block w-56" />
            <WildLogoSVG className={cx("h-[0.8em] text-theme-color-text-primary", "absolute right-8 bottom-10")} />.
          </span>
        </h1>
      </Text>
      <div className="w-full flex justify-center lg:justify-end flex-wrap gap-24">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="shrink-0 w-full max-w-[35rem] sm:w-272 h-272">
            <div className="w-full h-full bg-gray-10 rounded-md" /> {/* TODO: Replace with card component */}
          </div>
        ))}
      </div>
    </div>
  );
}
