import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Translator web",
  description: "We do some accent correcting service",
};

export default function RootLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
