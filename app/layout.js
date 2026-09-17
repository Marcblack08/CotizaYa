import './globals.css'

export const metadata = {
  title: 'CotizaYa',
  description: 'Cotizaciones rápidas para pequeños negocios y técnicos.',
}

export default function RootLayout({ children }) {
  return <html lang="es"><body>{children}</body></html>
}