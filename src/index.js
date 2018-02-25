class Sorter {
  constructor() { 
   this.comparator = false;
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
    // в отдельный массив клады те элементы, что нужно отсортировать
   var elementsToSort = [];
    for (var i = 0; i < indices.length; i++){
      elementsToSort.push(this.elementStorage[indices[i]]);
    }  

    // из основного массива убираю эти элементы
    this.elementStorage = this.elementStorage.filter(function(item, i){
      return indices.indexOf(i) === -1; 
    });

    // если setComparator === false, то по умолчанию сортирую, если нет - значит был вызван setComparator и надо использовать заданную функцию для сортировки
    if (this.comparator === false) {  
     elementsToSort.sort(function(a, b) {
        return a - b;
     });
    } else {
      elementsToSort.sort(this.compareFunction);
      this.comparator === false; // убираю флаг
    }
 
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
    // ставлю флаг  и запоминаю введенную функцию
    this.compareFunction = compareFunction; 
    return this.comparator = true;
  }
}

module.exports = Sorter;