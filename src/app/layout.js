// app/layout.js
import Link from "next/link";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    // This creates titles like "About Us | Ethiopian Spelling Bee"
    template: '%s | Ethiopian Spelling Bee',
    default: 'Ethiopian Spelling Bee (ESB) - Ethiopia\'s Premier Literacy Movement',
  },
  description: 'Join the Ethiopian Spelling Bee (ESB), the nation\'s largest literacy movement empowering over 600,000 students. Register your school, become a sponsor, or join as a student to build confidence and academic excellence.',
  keywords: ['Ethiopian Spelling Bee', 'ESB', 'Ethiopia', 'spelling competition', 'literacy', 'education', 'student competition', 'Addis Ababa'],
  authors: [{ name: 'Ethiopian Spelling Bee' }],
  creator: 'Ethiopian Spelling Bee',
  publisher: 'Ethiopian Spelling Bee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ethiopianspellingbee.org'), // Your actual domain
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: 'Ethiopian Spelling Bee (ESB) - Empowering Students Nationwide',
    description: 'Join Ethiopia\'s largest literacy movement. Register for the ESB competition, partner with us, or find resources to improve spelling and public speaking.',
    url: 'https://www.ethiopianspellingbee.org',
    siteName: 'Ethiopian Spelling Bee',
    images: [
      {
        url: 'https://www.ethiopianspellingbee.org/og-image.jpg', // You MUST create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Ethiopian Spelling Bee Logo and Champions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Spelling Bee (ESB) - Empowering Students Nationwide',
    description: 'Join Ethiopia\'s largest literacy movement. Register for the ESB competition and build lifelong skills.',
    images: ['https://www.ethiopianspellingbee.org/twitter-image.jpg'], // Can reuse the OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=jsDLQCf_fqi-9nGgR3L3P1Y2I3wTxNH9FAGaIqBQiDY', // Add your code here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
