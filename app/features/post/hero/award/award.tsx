import { BaseLink } from "~/features/ui/link";
import { Text } from "~/features/ui/text";

import { AwardLogo } from "./logo";
import { extractAwardsItemStringSections } from "./utils";

type Props = {
  awardItem: string;
};

export const Award = ({ awardItem }: Props) => {
  const { initial, awardName, end, link } = extractAwardsItemStringSections(awardItem);

  if (!initial) return null;

  return (
    <Text size="body-2" className="inline-flex justify-end gap-8 items-center text-gray-50 whitespace-nowrap">
      {awardName ? (
        <>
          <span>{initial}</span>
          <BaseLink href={link}>
            <AwardLogo name={awardName} />
          </BaseLink>

          <span>{end}</span>
        </>
      ) : (
        initial
      )}
    </Text>
  );
};
