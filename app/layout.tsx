import type { Metadata } from "next";
 import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  variable: "--font-inter",
  src: [
    { path: "../public/fonts/Inter-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Inter-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Inter-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/Inter-Bold.otf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const bahnschrift = localFont({
  variable: "--font-bahnschrift",
  src: [{ path: "../public/fonts/Bahnschrift.ttf", weight: "400", style: "normal" }],
  display: "swap",
});

const baiJamjuree = localFont({
  variable: "--font-baijamjuree",
  src: [
    { path: "../public/fonts/BaiJamjuree-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/BaiJamjuree-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/BaiJamjuree-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/BaiJamjuree-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});
const darkerGrotesque = localFont({
  variable: "--font-darker-grotesque",
  src: [
    { path: "../public/fonts/DarkerGrotesque-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/DarkerGrotesque-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/DarkerGrotesque-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/DarkerGrotesque-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/DarkerGrotesque-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/DarkerGrotesque-Black.ttf", weight: "900", style: "normal" },
  ],
  display: "swap",
});
const manrope = localFont({
  variable: "--font-manrope",
  src: [
    { path: "../public/fonts/manrope-thin.otf", weight: "100", style: "normal" },
    { path: "../public/fonts/manrope-light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/manrope-regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/manrope-medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/manrope-semibold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/manrope-bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/manrope-extrabold.otf", weight: "800", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bahnschrift.variable} ${baiJamjuree.variable} ${darkerGrotesque.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
