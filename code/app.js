// 题目3
function findMinFromArr(arr){
  const sortArr = arr.sort((a, b)=>{
    return a-b;
  })
  return sortArr[0]
}

console.log(findMinFromArr([99, 80, 233, 26, 1800]))

// 题目9
const promise = new Promise(( resolve, reject ) => {
  resolve('hello');
})

promise.then(value =>{
  return `${value} lagou,`
})
.then(value =>{
  console.log(`${value} I 💖 U`);
})
