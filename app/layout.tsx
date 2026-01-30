import localFont from "next/font/local";
import { MenuBar } from "./widgets/header.tsx";
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
      <body className={`${comicNeue.className} antialiased flex flex-row`}>
        <div className="w-1000">{children}</div>
        <MenuBar></MenuBar>
      </body>
    </html>
  );
}
