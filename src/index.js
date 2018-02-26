class Sorter {
  constructor() { 
    this.elementStorage = [];
		this.compareFunction = function(a, b) {
        return a - b;
     };
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
		
   var elementsToSort = [];
    for (var i = 0; i < indices.length; i++){
      elementsToSort.push(this.elementStorage[indices[i]]);
    }  
		
		elementsToSort.sort(this.compareFunction);
		indices.sort(this.compareFunction);
		
		for (var i = 0; i < indices.length; i++){
			this.elementStorage[indices[i]] = elementsToSort[i];
			}

     return this.elementStorage;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction; 
  }
}

module.exports = Sorter;
