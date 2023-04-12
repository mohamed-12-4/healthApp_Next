import { AuthContextProvider } from '@/context/authContext'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
  <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>
  )
}
