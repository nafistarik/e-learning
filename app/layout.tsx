import ReduxProvider from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillFlow",
  description: "Next.js Online Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}