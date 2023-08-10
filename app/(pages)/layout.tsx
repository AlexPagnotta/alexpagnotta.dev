import { cx } from "class-variance-authority";
import { type Metadata } from "next";
import localFont from "next/font/local";
import { type ReactNode } from "react";

import { Header } from "~/features/nav/header/header";
import { Container } from "~/features/ui/container";
import { Footer } from "~/features/ui/footer";

import "../styles/variables.css";
import "../styles/colors.css";
import "../styles/themes/light.css";
import "../styles/globals.css";

type Props = {
  children: ReactNode;
};

// Metadata
const SeoMetadata: Metadata = {
  title: {
    default: "Alex Pagnotta",
    template: "%s | Alex Pagnotta",
  },
  description: "This is a placeholder description TODO:.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    // TODO: Social Image
    // images: [
    //   {
    //     url: "",
    //   },
    // ],
  },
};

const HeadTags: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
  manifest: "/site.webmanifest",
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL ? new URL(process.env.NEXT_PUBLIC_BASE_URL) : undefined,
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      // The color property is not expected from the Metadata type, but still appended to the tag
      ...{ color: "#000000" },
    },
  },
};

export const metadata: Metadata = {
  ...HeadTags,
  ...SeoMetadata,
};

// Fonts

const loraFont = localFont({
  src: "../fonts/lora-variable.ttf",
  display: "swap",
  variable: "--font-lora",
});

const merriweatherSansFont = localFont({
  src: "../fonts/merriweather-sans-variable.ttf",
  display: "swap",
  variable: "--font-merriweather-sans",
});

const rootContainerStyle = [
  "grid grid-areas-root-layout grid-cols-root-layout grid-rows-root-layout",
  "lg:grid-areas-root-layout-lg lg:grid-cols-root-layout-lg lg:grid-rows-root-layout-lg",
  "pt-[--container-root-top-spacing]",
];

export const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={`${loraFont.variable} ${merriweatherSansFont.variable} theme-light`}>
      <body>
        <Container className={cx(rootContainerStyle)}>
          <Header className="grid-in-header" />

          <main className="grid-in-main"> {children}</main>

          <Footer className="grid-in-footer" />
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
