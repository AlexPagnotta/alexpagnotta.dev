import { Link, LinkButton } from "~/features/ui/link";
import { Text } from "~/features/ui/text";

export default function Home() {
  return (
    <main className="h-full bg-red-400">
      <Text size="title-1" asChild>
        <h1>Test Test</h1>
      </Text>
      <Link href="/test" underline className="text-gray-30">
        <Text size="title-1">Test Link</Text>
      </Link>
      <LinkButton underline className="text-theme-color-text-secondary">
        <Text size="title-1">Test Link</Text>
      </LinkButton>
    </main>
  );
}
