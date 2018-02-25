class Sorter {
  constructor() { 
   this.elementStorage = [];
   this.compareFunction = function(a, b) {
        return a - b;
     }
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

    indices.sort(this.compareFunction); // ?

    for (var i = 0; i < indices.length; i++){
      elementsToSort.push(this.elementStorage[indices[i]]);
    }  
    elementsToSort.sort(this.compareFunction);

    for (var i = 0; i < indices.length; i++) { 
      var currentIndex = indices[i];
      elementsToSort.forEach(function(elem){
        this.elementStorage[currentIndex] = elem; 
      });
+   }
   }
    /*
    // из основного массива убираю эти элементы
    this.elementStorage = this.elementStorage.filter(function(item, i){
      return indices.indexOf(i) === -1; 
    });
    console.log('elementStorage after deletion = ' + this.elementStorage);
    
    console.log('elementsToSort = ' + elementsToSort);

    // если все элементы попали в сортировку, возвращаю массив из хранилища
    if (this.elementStorage.length === 0) {
        this.elementStorage = elementsToSort; 
    // если не все - соединяю отсортированную часть с оставшимся массивом
    } else {
      this.elementStorage = elementsToSort.concat(this.elementStorage); 
    }

     return this.elementStorage;*/
  

  setComparator(compareFunction) {
    this.compareFunction = compareFunction; 
  }
}

module.exports = Sorter;