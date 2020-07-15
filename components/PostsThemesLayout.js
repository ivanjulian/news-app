import PostsNavBar from './PostsNavBar'
function PostsThemesLayout({children}) {
  return (
    <>
    <PostsNavBar />
    <main>
      {children}
    </main>
    </>
  )
}

export default PostsThemesLayout

