"use client";

import { usePathname } from "next/navigation";

import { headerItemLinkStyle } from "./style";

import { Link } from "~/features/ui/link";
import { Text } from "~/features/ui/text";

type Props = {
  className?: string;
};

const NavItems = [
  {
    key: "home",
    label: "Home",
    href: "/",
  },
  {
    key: "blog",
    label: "Blog",
    href: "/blog",
  },
  {
    key: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    key: "other",
    label: "Other",
    href: "/other",
  },
] as const;

export const HeaderNavItems = ({ className }: Props) => {
  const pathname = usePathname();

  return (
    <div className={className}>
      {NavItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.key}>
            <Text size="title-3" className={headerItemLinkStyle({ active: isActive })} asChild>
              <Link href={item.href}>{item.label}</Link>
            </Text>
          </li>
        );
      })}
    </div>
  );
};
