class Store {

    constructor() {
        
    }

    _items = [1,5];

    items = Rx.Observable.from(this._items);

}