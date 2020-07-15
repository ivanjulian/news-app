import Link from 'next/link'

function PostsNavBar() {
  return (
    <nav>
    <Link href="/new-posts/[theme]" as={`/new-posts/bitcoin`}><a>Bitcoin</a></Link>
    <Link href="/new-posts/[theme]" as={`/new-posts/apple`}><a>Apple</a></Link>
    <Link href="/new-posts/[theme]" as={`/new-posts/wall-street`}><a>Wall Street</a></Link>
  </nav>
  )
}

export default PostsNavBar
