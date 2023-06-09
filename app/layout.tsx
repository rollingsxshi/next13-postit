import { Roboto } from "next/font/google";
import QueryWrapper from "./auth/QueryWrapper";
import "./globals.css";
import Nav from "./auth/Nav";
import { ReactNode } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Inklings",
  description: "Generated by create next app",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans mx-4 md:mx-48 xl:mx-96 bg-gray-200`}
      >
        <QueryWrapper>
          {/* @ts-expect-error Server Component */}
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
