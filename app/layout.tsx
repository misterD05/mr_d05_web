import localFont from "next/font/local";
import { MenuBar } from "./widgets/header.tsx";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const comicNeue = localFont({
  src: './font/ComicNeue-Regular.ttf',
  display: 'swap'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${comicNeue.className} antialiased scrollbar-hidden h-full w-full`}>
        <MenuBar></MenuBar>
        <Analytics></Analytics>
        <div className="w-auto h-auto z-0 flex">{children}</div>
      </body>
    </html>
  );
}
