import { Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Load Fira Sans Condensed
const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // add the weights you need
  variable: "--font-fira-sans-condensed",
});
export const metadata = {
  title: "Muhammad Talha | Portfolio Website",
  description: "This is a protfolio website of Muhammad Talha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="theme-blue">
      <body className={`${firaSansCondensed.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
