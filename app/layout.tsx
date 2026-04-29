import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800']
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Fegaduolize Dev Soluções | Desenvolvimento Web Profissional',
  description: 'Desenvolvemos sites profissionais, e-commerce e sistemas personalizados para empresas que precisam crescer — da identidade digital às plataformas de logística.',
  generator: 'v0.app',
  keywords: ['desenvolvimento web', 'sites profissionais', 'e-commerce', 'sistemas', 'Curitiba', 'software'],
  authors: [{ name: 'Fegaduolize Dev Soluções' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-[#111e38]">
      <body className={`${syne.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
