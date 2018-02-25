// функция, которую будем применять
function addOne(array){
  return array;
}

///////////////////////////
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

     // в отдельный массив клады те элементы, что нужно отсортировать
   var elementsToSort = [];
    for (var i = 0; i < indices.length; i++){
      elementsToSort.push(this.elementStorage[indices[i]]);
    }  

    // из основного массива убираю эти элементы
    this.elementStorage = this.elementStorage.filter(function(item, i){
      return indices.indexOf(i) === -1; 
    });
    elementsToSort.sort(this.compareFunction);

    // если все элементы попали в сортировку, возвращаю массив из хранилища
    if (this.elementStorage.length === 0) {
        this.elementStorage = elementsToSort; 
    // если не все - соединяю отсортированную часть с оставшимся массивом
    } else {
      this.elementStorage = elementsToSort.concat(this.elementStorage); 
    }

     return this.elementStorage;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction; 
  }
}

module.exports = Sorter;