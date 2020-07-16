import { useObserver, useLocalStore } from "mobx-react";
import React from "react";
import { runInAction } from "mobx";
import {MY_TOKEN} from './token/token';

export const StoreContext = React.createContext();


export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    posts: [],
    fetchPosts: async (theme) => {
      const url = `http://newsapi.org/v2/everything?q=${theme}&sortBy=popularity&apiKey=${MY_TOKEN}`
  
      const response = await fetch(url);    
      const posts = await response.json();
      runInAction(() => {
        store.posts = posts.articles
      })
    }
  }))
  StoreContext.value = store.posts;
  return <StoreContext.Provider value={store} >{children}</StoreContext.Provider>
}
