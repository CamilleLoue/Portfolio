import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Camille Loue",
  description: "my personal website",
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
