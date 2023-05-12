import { Navbar } from "@/components";
import "./globals.css";
import { Gowun_Dodum } from "next/font/google";

const gowun_dodum = Gowun_Dodum({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "My CozyStay",
  description: "Stay while away",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gowun_dodum.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
