import PostsThemesLayout from '../../components/PostsThemesLayout';
import {useEffect, useContext } from "react";
import {StoreContext} from '../../store';
import { useObserver } from 'mobx-react';
import { useRouter } from 'next/router';

function NewPosts() {
  const store = useContext(StoreContext);
  const router = useRouter();
  useEffect(()=>{
    store.fetchPosts(`${router.query.theme}`);
  },[router.query.theme])
  return useObserver(() => (
    <>
        <PostsThemesLayout>
        <h1 className="news-title">Main news</h1>
          <ul className="news-container">
            {store.posts?
              store.posts.map(post => (
                <li key={post.url} className="post-container">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                  <img className="post-image" src={post.urlToImage} alt=""/>
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
