import MainLayout from '../components/MainLayout'
import { StoreProvider } from '../store'
//import '../styles/style.css'

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