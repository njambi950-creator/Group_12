//Store the group's ages 
function getAges (){
    const ages = [18, 18, 18, 17, 19];
    return ages;
}
 // Get the total age 
 function getTotalAge(arr){
    let total = 0;
 
 for (let i = 0; i < arr.length; i++){
    total = total + arr[i];
 } 

 return total;
}

//Get average age
function getAverageAge(arr) {
    let total = getTotalAge(arr);
    let average = total / arr.length;
    return average;
}

//Output
const myAges = getAges();
console.log("Group ages:", myAges);
console.log("Total ages:", getTotalAge (myAges));
console.log("Average ages:", getAverageAge (myAges));