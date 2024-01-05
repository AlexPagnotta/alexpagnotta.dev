import { cx } from "class-variance-authority";
import { type ReactNode } from "react";

import { Header } from "~/features/nav/header/header";
import { Container } from "~/features/ui/container";
import { Footer } from "~/features/ui/footer";

type Props = {
  children: ReactNode;
};

const rootContainerStyle = [
  "grid grid-areas-root-layout grid-cols-root-layout grid-rows-root-layout",
  "lg:grid-areas-root-layout-lg lg:grid-cols-root-layout-lg lg:grid-rows-root-layout-lg",
  "pt-[--container-root-top-spacing]",
];

const SiteLayout = ({ children }: Props) => {
  return (
    <Container className={cx(rootContainerStyle)}>
      <Header className="grid-in-header" />

      <main className="grid-in-main">{children}</main>

      <Footer className="grid-in-footer" />
    </Container>
  );
};

export default SiteLayout;
