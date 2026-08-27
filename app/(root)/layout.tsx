import { ThemeProvider } from '@/components/theme-provider'
import { baloo, siteMetadata, siteViewport } from '@/lib/site-shell'
import '../globals.css'

export const metadata = siteMetadata
export const viewport = siteViewport

export default function RootLandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${baloo.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
