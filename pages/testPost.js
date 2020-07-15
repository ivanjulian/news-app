import MainLayout from '../components/MainLayout'
import PostsThemesLayout from '../components/PostsThemesLayout'

function TestPost() {
  return (
    <>
      <MainLayout>
        <PostsThemesLayout>
          <p>testing props</p>
        </PostsThemesLayout>
      </MainLayout>
    </>
  )
}

export default TestPost
