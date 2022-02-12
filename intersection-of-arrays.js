let arr1 = [1, 3, 6, 5]
let arr2 = [2, 8, 3, 5]

function diffrence(array1, array2){
  
  let intersectionArray = []
  array1.forEach(el=>{
    if (array2.includes(el)) {
      intersectionArray.push(el)
    }
  })
  
  return intersectionArray
}


console.log("intersection of",arr1,"and",arr2,"--->",diffrence(arr1, arr2))
