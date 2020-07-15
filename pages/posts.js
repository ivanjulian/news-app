import MainLayout from '../components/MainLayout'
import PostsThemesLayout from '../components/PostsThemesLayout'

function Posts() {
  return (
    <>
      <PostsThemesLayout >
        <div className="posts-container">
          <h1 className="posts-text">Select one of the topics above </h1>
        </div>
      </PostsThemesLayout>
    </>
  )
}

export default Posts
