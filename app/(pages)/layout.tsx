import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";
import localFont from "next/font/local";
import { type ReactNode } from "react";

import { siteConfig } from "~/config";

import "../styles/variables.css";
import "../styles/colors.css";
import "../styles/themes/light.css";
import "../styles/globals.css";

type Props = {
  children: ReactNode;
};

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Alex Pagnotta",
    template: "%s | Alex Pagnotta",
  },
  description: "Alex Pagnotta, Frontend Developer",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    images: [{ url: `/og-image.png` }],
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
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
      // The color property is not expected from the Metadata type, but still appended to the tag when added.
      ...{ color: "#424242" },
    },
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Fonts

const literataFont = localFont({
  src: "../fonts/literata-variable.ttf",
  display: "swap",
  variable: "--font-literata",
});

const merriweatherSansFont = localFont({
  src: "../fonts/merriweather-sans-variable.ttf",
  display: "swap",
  variable: "--font-merriweather-sans",
});

const Layout = ({ children }: Props) => {
  return (
    <html lang="en" className={`${literataFont.variable} ${merriweatherSansFont.variable} theme-light`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
