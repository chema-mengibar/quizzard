import { decorate, computed, observable, action } from 'mobx';


class AppStore {

  user = 'none';
  storeArray = observable([]);
  cactus = observable.box('ay!');

  selectUser( user: string) {
    this.user = user;
  }

  addItem( item: string) {
    this.storeArray.push(item);
  }

  get getUser() {
    return this.user;
  }


  get getStoreArray() {
    return this.storeArray;
  }

  get getCactus() {
    return this.cactus;
  }


}

decorate (AppStore, {
  user: observable,
  cactus: observable,
  storeArray: observable,

  selectUser: action,
  addItem: action,

  getUser: computed,
  getStoreArray: computed,
  getCactus: computed,

});

export default new AppStore();

/*
https://alexhisen.gitbooks.io/mobx-recipes/content/use-observables-instead-of-state-in-react-components.html
https://mobx.js.org/best/decorators.html
https://mobx.js.org/best/store.html
https://stackoverflow.com/questions/53877379/how-to-use-mobx-react-observer-without-decorator-syntax
https://medium.com/@trekinbami/observe-changes-in-dynamically-keyed-objects-with-mobx-and-react-24b4f857bae9
*/