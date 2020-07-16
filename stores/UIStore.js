import { observable } from "mobx"

class UIStore {
  @observable posts = false;

  @action setSearchOverlayOpen(value) {
    this.posts = value;
  }
}

export default UIStore;