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
    href: "/",
  },
  {
    key: "projects",
    label: "Projects",
    href: "/",
  },
  {
    key: "other",
    label: "Other",
    href: "/",
  },
] as const;

const InfoItems = [
  {
    key: "github",
    label: "Github",
    href: "/",
  },
  {
    key: "linkedin",
    label: "Linkedin",
    href: "/",
  },
  {
    key: "cv",
    label: "CV",
    href: "/",
  },
  {
    key: "contact",
    label: "Contact",
    href: "/",
  },
] as const;

export const HeaderNavItems = ({ className }: Props) => {
  return (
    <div className={className}>
      {NavItems.map((item) => (
        <li key={item.key}>
          <Text size="title-3" className="text-theme-color-text-secondary" asChild>
            {/* TODO: Handle items filter on homepage using url params, thos way we avoid having a state in the parent and
            we can use server component */}
            <Link href={item.href}>{item.label}</Link>
          </Text>
        </li>
      ))}
    </div>
  );
};

export const HeaderInfoItems = ({ className }: Props) => {
  return (
    <div className={className}>
      {InfoItems.map((item) => (
        <li key={item.key}>
          <Text size="body-4" className="text-theme-color-text-secondary" asChild>
            <Link href={item.href} arrowIcon>
              {item.label}
            </Link>
          </Text>
        </li>
      ))}
    </div>
  );
};
