"use client";

import { usePathname } from "next/navigation";

import { Link } from "~/features/ui/link";
import { Text } from "~/features/ui/text";

import { HeaderItem } from "./item";
import { headerItemLinkStyle } from "./style";

type Props = {
  className?: string;
};

export const NavItems = [
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
    key: "lab",
    label: "Lab",
    href: "/lab",
  },
  // TODO: Reimplement
  // {
  //   key: "other",
  //   label: "Other",
  //   href: "/other",
  // },
] as const;

export const HeaderNavItems = ({ className }: Props) => {
  const pathname = usePathname();
  const pathnameSegment = `/${pathname.split("/")[1] || ""}`;

  return (
    <div className={className}>
      {NavItems.map((item, index) => {
        const isActive = pathnameSegment === item.href;

        return (
          <HeaderItem key={item.key} index={index}>
            <Text size="title-4" className={headerItemLinkStyle({ active: isActive })} asChild>
              <Link href={item.href}>{item.label}</Link>
            </Text>
          </HeaderItem>
        );
      })}
    </div>
  );
};
