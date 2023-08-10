import { Text } from "~/features/ui/text";

export default function Home() {
  return (
    <>
      <Text size="title-1" asChild className="whitespace-pre-wrap text-right text-theme-color-text-secondary">
        <h1>
          Hello, I’m <span className="text-theme-color-text-primary">Alex Pagnotta</span>,{"\n"}a Frontend Developer
          from Italy.{"\n"}
          <span className="hidden lg:inline">Currently building </span>
          <span className="lg:hidden">Building </span>
          things at Wild.
        </h1>
      </Text>
    </>
  );
}
