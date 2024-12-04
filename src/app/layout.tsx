import type { Metadata } from "next";
import { Roboto } from "@/utils/custom-fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Test - TODO App",
  description: "Developed by Nnajiofor Uchenna Franklin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Roboto.variable} antialiased fo`}
      >
        {children}
      </body>
    </html>
  );
}
