import MainLayout from '../components/MainLayout'
//import '../styles/style.css'
import { StoreProvider } from '../store'
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
    <MainLayout>
      <Component {...pageProps} />
      </MainLayout>
    </StoreProvider>

  )
}

export default MyApp