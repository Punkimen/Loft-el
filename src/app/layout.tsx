import type {Metadata} from "next";
import {Cormorant} from "next/font/google";
import localFont from "next/font/local";
import cn from "classnames";
import {Layout} from "@/core/app";
import "normalize.css";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-Cormorant",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  adjustFontFallback: false,
});

const lithium = localFont({
  variable: "--font-Lithium",
  src: [
    {
      path: "../../public/fonts/Lithium_tf.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  adjustFontFallback: false,
});

const artist = localFont({
  variable: "--font-Artist",
  src: [
    {
      path: "../../public/fonts/MADE-TheArtist-Script-PERSONAL-USE.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  adjustFontFallback: false,
});

const sfPro = localFont({
  variable: "--font-SFPro",
  src: [
    {
      path: "../../public/fonts/SF-Pro-Display-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Display-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  adjustFontFallback: false,
});
export const metadata: Metadata = {
  title: "Loftel",
  description: "Lifestyle hotel collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(cormorant.variable, lithium.variable, artist.variable, sfPro.variable)}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
