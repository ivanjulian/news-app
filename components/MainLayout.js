import NavBar from './NavBar'
import Head from 'next/head'
function MainLayout({children}) {
  return (
    <>
    <Head>
      <title>News Getter</title>
    </Head>
    <NavBar />
    <main>
      {children}
    </main>
    </>
  )
}

export default MainLayout