import './globals.css'

export const metadata = {
  title: 'E-Commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
