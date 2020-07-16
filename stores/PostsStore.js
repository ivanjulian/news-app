import { observable, action } from 'mobx';

class PostStore {
  @observable posts = null;

  constructor(initialData = []) {
    this.post = initialData.post;
  }

  async fetch(id) {
    const url = `http://newsapi.org/v2/everything?q=${theme}&sortBy=popularity&apiKey=${MY_TOKEN}`
    const response = await fetch(url);
    const posts = await response.json();
    this.setPosts(posts);
  }

  @action setPosts(posts) {
    this.posts = posts;
  }
}

export default PostStore;
