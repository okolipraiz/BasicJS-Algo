//Answer for Question 1
function convertFahrToCelsius(F){
  if(!Number.isInteger(parseInt(F)) || Array.isArray(F)){
    return `${JSON.stringify(F)} is not a valid number but a/an ${Array.isArray(F)?"array":typeof(F)}`.replace("{\\",'')
  }
  let C = (F-32) * 5/9
  return C.toFixed(4)
}

console.log(convertFahrToCelsius({temp:0}))

//Answer for Question 2
function checkYuGiOh(n){
  if(isNaN(n)){
   return "fizzbuzz is meh"
  }
  let arr = []
  for(let i=1; i<=n; i++){
    let val = []
    
    if(i%2==0){
      val.push("yu")
    }
    if(i%3==0){
      val.push("gi")
    }
    if(i%5==0){
      val.push("oh")
    }
    if(i%2!==0 && i%3!==0 && i%5!==0){
      val.push(i)
    }
   if(typeof(val[0])=="number"){
    arr.push(val[0])
   }
   else{
     arr.push(val.join("-"))
   }
    
  }
  return arr
}
console.log(checkYuGiOh(10))
