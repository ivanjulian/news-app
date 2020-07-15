import { useObserver, useLocalStore } from "mobx-react";
import React from "react";
import { runInAction } from "mobx";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    texts: ['hey', 'yo', 'hello'],
    fetchTexts: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      runInAction(() => {
        store.texts = posts
      })
    }
  }))
  return <StoreContext.Provider value={store} >{children}</StoreContext.Provider>
}
