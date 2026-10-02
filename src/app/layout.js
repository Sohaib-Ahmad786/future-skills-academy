import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://futureskills.site"),

  title: {
    default: "Future Skills Academy | Education That Builds Futures",
    template: "%s | Future Skills Academy",
  },

  description:
    "Future Skills Academy provides quality, concept-based education, practical learning, and academic support to help students build strong skills and a successful future.",

  applicationName: "Future Skills Academy",

  authors: [
    {
      name: "Future Skills Academy",
    },
  ],

  creator: "Future Skills Academy",
  publisher: "Future Skills Academy",

  alternates: {
    canonical: "https://futureskills.site",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://futureskills.site",
    siteName: "Future Skills Academy",
    title: "Future Skills Academy | Education That Builds Futures",
    description:
      "Quality, concept-based education and practical learning at Future Skills Academy.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
