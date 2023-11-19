import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yaniv Smadar Construction",
  description: "a premium construction experience in Israel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="auto">
      <body className={inter.className}>
        <div className="flex flex-col lg:flex-row ">
          <Header />
          <div id="content" className="min-h-screen w-full lg:ml-36 ">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
