const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let i = 0; i < Object.keys(collection).length; i++){
        callback(Object.values(collection)[i], i, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let accumulatorArray = [];
      for (let i = 0; i < Object.keys(collection).length; i++){
        accumulatorArray.push(callback(Object.values(collection)[i], i, collection))
      }
      return accumulatorArray
    },

    reduce: function(collection, callback, acc) {
      //Eğer başlangıç değeri verilmediyse birincisini başlangıç değeri olarak kabul etmeli
      let acc2;
      if (typeof acc === "undefined") {
        acc2 = Object.values(collection)[0]
        for (let i = 1; i < Object.keys(collection).length; i++){
          acc2 = callback(acc2, Object.values(collection)[i], collection)
        }
      } else{
      acc2 = acc
      for (let i = 0; i < Object.keys(collection).length; i++){
        acc2 = callback(acc2, Object.values(collection)[i], collection)
      }
      }
      return acc2
    },

    find: function (collection, predicate){
      for (let i = 0; i < Object.keys(collection).length; i++){
        if (predicate(Object.values(collection)[i]) === true){
          return Object.values(collection)[i]
        }
      }
      return undefined
    },

    filter: function (collection, predicate){
      let accumulatorArray = []
      for (let i = 0; i < Object.keys(collection).length; i++){
        if (predicate(Object.values(collection)[i]) === true){
          accumulatorArray.push(Object.values(collection)[i])
        }
      }
    return accumulatorArray
    },

    size: function (collection) {
      return Object.values(collection).length
    },

    first: function (array, n) {
      if (n === undefined) {
        return array[0]
      } else{
        return array.slice(0,n)
      }
    },

    last: function (array, n){
      if (n === undefined) {
        return array[array.length-1]
      } else{
        return array.slice(-n)
      }
    },

    compact: function (array) {
      const accumulatorArray = [];
      array.forEach(element => {
        if (element) {
          accumulatorArray.push(element)
        }
      });
      return accumulatorArray
    },
    
    sortBy: function (array, callback) {
      const copyOfArray = array.slice()
      // console.log(copyOfArray)
      return copyOfArray.sort((a, b) => callback(a) - callback(b)) 
    },

    flatten: function(array, level = false, output = []){
      //End line for recursion
      if (!Array.isArray(array)) return output.push(array)
      if (level){
        for (let i=0; i<array.length; i++){
          if (array[i].length === undefined){
            output.push(array[i])
          } else {
          for (let j=0; j<array[i].length; j++){
            output.push(array[i][j])
          }}
        }
      } 
      //Recursion loop
      else {
        for (let val of array) {
          this.flatten(val, false, output)
        }
      }
      return output 
    },

//Burada kaldık,
    uniq: function (array, isSorted = false, callback = e=>e) {
      if (isSorted){
        return [...new Set(array.map(callback))]
      } else {
        // return [...new Set(fi.sortBy(array, callback))]

      }
       
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
