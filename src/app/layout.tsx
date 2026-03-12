import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globales.scss";
import "@/styles/index.scss";
import { Container, Navbar, Footer } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SanFabiian - Web Designer & Developer",
  description: "SanFabiian is a web designer and developer with a passion for creating beautiful and functional websites.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Container>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
