import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Healthcare",
  description: "Trusted health services by professionals",
  icons: {
    icon: "/favicon1.jpg", // You can also use PNG or SVG
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.jpg" />
      </head> */}
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
