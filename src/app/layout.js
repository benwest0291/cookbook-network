import './styles.scss';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'The Cookbook Network',
  description: 'Network for family and friends to share their passion for food',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
