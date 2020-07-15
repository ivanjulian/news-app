import Link from 'next/link'

function PostsNavBar() {
  return (
    <nav className="post-nav-container">
    <Link href="/new-posts/[theme]" as={`/new-posts/bitcoin`}><a className="post-nav-link">Bitcoin</a></Link>
    <Link href="/new-posts/[theme]" as={`/new-posts/wall-street`}><a className="post-nav-link">Wall Street</a></Link>
    <Link href="/new-posts/[theme]" as={`/new-posts/apple`}><a className="post-nav-link">Apple</a></Link>
  </nav>
  )
}

export default PostsNavBar
