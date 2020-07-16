import MainLayout from '../components/MainLayout';
import { StoreProvider,  } from '../store';
import './styles/new-posts.css';
import './styles/NavBars.css';
import './styles/Posts.css';
import './styles/Home.css'


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