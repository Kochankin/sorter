class Sorter {
  constructor() { 
   this.elementStorage = [];
  }

  add(element) { 
    return this.elementStorage.push(element);
  }

  at(index) {
     return this.elementStorage[index];
  }

  get length() {
    return this.elementStorage.length;
  }

  toArray() {
   return this.elementStorage;
  } 

  sort(indices) { 
    this.compareFunction = function(a, b) {
        return a - b;
     }
   var elementsToSort = [];
    for (var i = 0; i < indices.length; i++){
      elementsToSort.push(this.elementStorage[indices[i]]);
    }  
    elementsToSort.sort(this.compareFunction);

    for (var j = 0; j < elementsToSort.length; j++){
      var current = elementsToSort[j];
      this.elementStorage.splice(indices[j], indices[j+1], current);
    }

    return this.elementStorage;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction; 
  }
}

module.exports = Sorter;