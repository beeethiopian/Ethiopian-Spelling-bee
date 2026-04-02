import Link from "next/link";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ethiopian Spelling Bee",
  description: "Official ESB Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}