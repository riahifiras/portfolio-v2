import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Firas Riahi',
  description: 'My handcrafted portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
