import { useStaticRendering } from 'mobx-react';

import PostsStore from './PostsStore';
import UIStore from './UIStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { postsStore: {} }) {
  if (isServer) {
    return {
      postsStore: new PostsStore(initialData.postsStore),
      uiStore: new UIStore(),
    };
  }
  if (store === null) {
    store = {
      postsStore: new PostsStore(initialData.postsStore),
      uiStore: new UIStore(),
    };
  }

  return store;
}