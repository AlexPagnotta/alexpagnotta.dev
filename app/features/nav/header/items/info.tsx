import { headerItemLinkStyle } from "./style";

import { siteConfig } from "~/config";
import { Link } from "~/features/ui/link";
import { Text } from "~/features/ui/text";

type Props = {
  className?: string;
};

const InfoItems = [
  {
    key: "github",
    label: "Github",
    href: siteConfig.github,
  },
  {
    key: "linkedin",
    label: "Linkedin",
    href: siteConfig.linkedin,
  },
  {
    key: "cv",
    label: "CV",
    href: siteConfig.cvUrl,
  },
  {
    key: "contact",
    label: "Contact",
    href: `mailto:${siteConfig.email}`,
  },
] as const;

export const HeaderInfoItems = ({ className }: Props) => {
  return (
    <div className={className}>
      {InfoItems.map((item) => (
        <li key={item.key}>
          <Text size="body-4" className={headerItemLinkStyle()} asChild>
            <Link href={item.href} arrowIcon>
              {item.label}
            </Link>
          </Text>
        </li>
      ))}
    </div>
  );
};
