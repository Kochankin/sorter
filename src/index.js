class Sorter {
  constructor() {
    this.elementStorage = [];
  }

  add(element) {
    return this.elementStorage.push(element);
  }

 // at(index) {
    // your implementation
  //}

  get length() {
    return this.elementStorage.length;
  }

  toArray() {
    return this.elementStorage;
  }

  sort(indices) {
    var elementsToSort = [];
    
    if (indices.length === 0) {
      console.log ('Array is empty!');
      return this.elementStorage;
    } else {
    
      for (var i = 0; i < indices.length; i++){
        elementsToSort.push(this.elementStorage[i]);
      }     
       return  elementsToSort.sort(function(a, b) {
        return a - b;
      });
    }
  }

  setComparator(compareFunction) {
    return this.elementStorage.sort(compareFunction);
  }
}

module.exports = Sorter;