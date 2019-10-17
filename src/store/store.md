# Store

```
user='none';
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

```
