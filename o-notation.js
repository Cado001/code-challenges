function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
  
    let i = 0;
    let j = 0;
    
    while (i < array1.length && j < array2.length) {
      if (array1[i] <= array2[j]) {
        mergedArray.push(array1[i]);
        i++;
      } else {
        mergedArray.push(array2[j]);
        j++;
      }
    }
  
    while (i < array1.length) {
      mergedArray.push(array1[i]);
      i++;
    }
  
    while (j < array2.length) {
      mergedArray.push(array2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  
  const array1 = [3, 6, 8, 11, 14, 21];
  const array2 = [2, 9, 12, 13, 15, 20];
  
  const mergedArray = mergeSortedArrays(array1, array2);
  
  console.log(mergedArray);
  
