import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

//poppins instead of inter
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100","200","300","400","500","600", "700","800","900"],
});

export const metadata: Metadata = {
  title: "Create a Next App",
  description: "Creating a next app where I and others can share snippets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClerkProvider>
          {children}
        </ClerkProvider>
        </body>
    </html>
  );
}
