import { DesktopHeader } from "./desktop";
import { MobileHeader } from "./mobile";

type Props = {
  className?: string;
};

export const Header = ({ className }: Props) => {
  return (
    <header className={className}>
      <DesktopHeader className="hidden lg:flex" />
      <MobileHeader className="lg:hidden" />
    </header>
  );
};
