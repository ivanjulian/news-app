import Link from 'next/link'

function NavBar() {
  return (
    <nav>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/posts"><a>News</a></Link>
  </nav>
  )
}

export default NavBar
