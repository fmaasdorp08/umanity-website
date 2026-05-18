import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "uManity Foundation NPC | Putting U Back Into Humanity",
  description: "Premium humanitarian movement website for uManity Foundation NPC.",
  metadataBase: new URL("https://umanity.org.za"),
  openGraph: {
    title: "uManity Foundation NPC",
    description: "Putting U back into Humanity.",
    url: "https://umanity.org.za",
    siteName: "uManity Foundation NPC",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${serif.variable} bg-[#f6f1e8] text-[#2d2a26] antialiased`}>
        {children}
      </body>
    </html>
  );
}
