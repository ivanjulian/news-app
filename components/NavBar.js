import Link from 'next/link'
// import '../pages/styles/NavBar.module.css'
function NavBar() {
  return (
    <nav className="nav-container">
    <Link href="/"><a className="nav-link">Home</a></Link>
    {/* <Link href="/about"><a className="nav-link">About</a></Link> */}
    <Link href="/posts"><a className="nav-link">News</a></Link>
  </nav>
  )
}

export default NavBar
