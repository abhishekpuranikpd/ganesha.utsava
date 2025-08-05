import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sri Siddha Shiva VaraGanapati Utsava - 2025",
  description:
    "Join the divine celebration of Lord Ganesha at Shri Siddharoodh Math, Chalakapur. Register for the sacred Dhoopa Deeparati ceremony with 1001 women.",
  keywords: "Ganesh Utsava, Dhoopa Deeparati, Siddharoodh Math, Chalakapur, Hindu Festival, Ganesha Celebration",
  openGraph: {
    title: "Sri Siddha Shiva VaraGanapati Utsava - 2025",
    description: "Join the divine celebration of Lord Ganesha at Shri Siddharoodh Math, Chalakapur",
    images: ["/images/ganesha-idol.jpeg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}