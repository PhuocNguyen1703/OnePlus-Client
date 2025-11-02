import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { roboto } from '@/libs/fonts'
import './globals.css'
import ThemeProvider from '@/components/theme-provider'
import { Toaster } from 'sonner'
import ActionAlertDialog from '@/components/layouts/AlertDialog'

export const metadata: Metadata = {
  title: 'OnePlus service',
  description: 'OnePlus service',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  return (
    <html lang={locale} data-scroll-behavior='smooth' suppressHydrationWarning>
      <body className={`${roboto.className} overflow-hidden`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>
            {children}
            <Toaster position='top-center' richColors duration={2000} />
            <ActionAlertDialog />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
