import { Inter, Merriweather } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}