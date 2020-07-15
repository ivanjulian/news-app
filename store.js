import { useObserver, useLocalStore } from "mobx-react";
import React from "react";
import { runInAction } from "mobx";
import {MY_TOKEN} from './token/token';

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    posts: [],
    fetchPosts: async (theme) => {
      const url = `http://newsapi.org/v2/everything?q=${theme}&from=2020-06-15&sortBy=popularity&apiKey=${MY_TOKEN}`
      const response = await fetch(url);    
      const posts = await response.json();
      runInAction(() => {
        store.posts = posts.articles
      })
      console.log('fetched posts', posts);
      console.log('url', url);

    }
  }))
  return <StoreContext.Provider value={store} >{children}</StoreContext.Provider>
}
