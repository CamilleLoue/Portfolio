import "./globals.css";
// Import React if not globally available
import React from 'react';
import { Inter } from "next/font/google";
import Header from "./components/Header.jsx";

const inter = Inter({ subsets: ["latin"] });

// Removed TypeScript type annotation for metadata
export const metadata = {
  title: "Camille Loue",
  description: "My Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}