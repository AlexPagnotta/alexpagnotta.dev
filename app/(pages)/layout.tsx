import { type Metadata } from "next";
import localFont from "next/font/local";
import { type ReactNode } from "react";
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

// TODO: Reimplement
// const interFont = localFont({
//   src: "../fonts/inter-variable.ttf",
//   display: "swap",
//   variable: "--font-inter",
// });

export const RootLayout = ({ children }: Props) => {
  return (
    // <html className={`${interFont.variable}`}> TODOL
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
