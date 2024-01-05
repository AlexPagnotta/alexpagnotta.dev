import { Button } from "../ui/button";
import { Icon } from "../ui/icon/icon-component";
import { BaseLink, Link } from "../ui/link";
import { Text } from "../ui/text";

type Props = {
  title: string;
  excerpt?: string;
  prevItemHref?: string;
  nextItemHref?: string;
};

export const Lab3DOverlay = ({ title, excerpt, prevItemHref, nextItemHref }: Props) => {
  return (
    <div className={"absolute inset-0 mx-auto max-w-[128rem] pointer-events-none"}>
      <div className="absolute inset left-32-px bottom-48-px bg-white text-black rounded-md border-2 border-gray-20 pointer-events-auto">
        <div className="p-[--card-spacing] flex flex-col min-w-[calc(min(320px,100vw-64px))]">
          <Text size="title-3" asChild className="mb-16">
            <h2>{title}</h2>
          </Text>

          <Text size="body-2" asChild className="mb-32">
            <p>{excerpt}</p>
          </Text>

          <div className="flex gap-8-px justify-between">
            <Text size="body-2" weight="regular" className="cursor-pointer" asChild>
              <Link href="/" underline arrowIcon>
                Back to home
              </Link>
            </Text>
            <div className="flex gap-8-px">
              <Button variant="primary" size="md" iconButton aria-label="Go to prev entry" asChild>
                <BaseLink href={prevItemHref} disabled={!prevItemHref}>
                  <Icon name="chevronLeft" />
                </BaseLink>
              </Button>
              <Button variant="primary" size="md" iconButton aria-label="Go to next entry" asChild>
                <BaseLink href={nextItemHref} disabled={!nextItemHref}>
                  <Icon name="chevronRight" />
                </BaseLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
