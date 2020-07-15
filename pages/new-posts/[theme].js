import PostsThemesLayout from '../../components/PostsThemesLayout'
import {useEffect, useContext } from "react";
import {StoreContext} from '../../store'
import { useObserver } from 'mobx-react';
import { useRouter } from 'next/router'


function NewPosts() {
  const store = useContext(StoreContext);
  const router = useRouter();
  useEffect(()=>{
    store.fetchPosts(`${router.query.theme}`);
  },[router.query.theme])
  return useObserver(() => (
    <>
        <PostsThemesLayout>
          <ul>
            {store.posts?
              store.posts.map(post => (
                <li key={post.url}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <img style={{width: "200px"}} src={post.urlToImage} alt=""/>
                </li>
              ))
              : <p>Loading...</p>
            }
          </ul>
        </PostsThemesLayout>
    </>
  ))
}

// TestPost.getInitialProps = async () => {

// }

export default NewPosts
