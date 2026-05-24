import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahroze Hussain | Web and Mobile App Development",
  description:
    "One-page portfolio for Shahroze Hussain, offering web and mobile app development services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
