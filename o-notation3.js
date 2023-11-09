function mergeSortedArrays(a,b) {
    let c = [], i=0, j=0 
    while (true) {
      if(j >= a.length) {
      if(j >= b.length) {
        return c
      }
        c.push(b[j])
        j++
      } else {
        if(j >= b.length) {
            c.push(a[i])
            i++
        } else {
            c.push(b[j])
            j++
        }
      }
    } 
}


const array1 = [3, 6, 8, 11, 14, 21]
const array2 = [2, 9, 12, 13, 15, 20]

const mergedArray = mergeSortedArrays(array1, array2);
  
console.log(mergedArray);