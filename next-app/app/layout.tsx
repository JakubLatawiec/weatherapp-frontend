import TanstackQueryProvider from "@/components/providers/tanstack-query-provider";
import { LocationProvider } from "@/context/location-context";
import { ThemeContextProvider } from "@/context/theme-context";
import type { Metadata } from "next";
import { Russo_One, Chakra_Petch } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
  variable: "--font-russo",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
})

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Weather App",
  description: "App that allows you check weather wherever you are!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${russoOne.variable} ${chakraPetch.variable} antialiased`}
      >
        <ThemeContextProvider>
        <TanstackQueryProvider>
          <LocationProvider>
          {children}
          </LocationProvider>
        </TanstackQueryProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
