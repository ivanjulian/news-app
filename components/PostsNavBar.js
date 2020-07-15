import Link from 'next/link'

function PostsNavBar() {
  return (
    <nav>
    <Link href="/testPost"><a>Theme1</a></Link>
    <Link href="/testPost"><a>Theme2</a></Link>
    <Link href="/testPost"><a>Theme3</a></Link>
  </nav>
  )
}

export default PostsNavBar
