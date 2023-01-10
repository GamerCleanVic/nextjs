import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
