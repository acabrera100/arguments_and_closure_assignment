//
// const double = (num)=>{
// return num *2;
// }
// // console.log(double(4))
//
// const square = (num)=>{
//   return Math.pow(num,2);
// }
// console.log(square(12));
//
// const doubleSquare = (num) =>{
//   let dbl = double(num);
//   // this is setting a variable within the function doubleSquare
//   // that calls upon the first functio double
//   let squared = square(dbl);
//   return squared ;
// }
// console.log(doubleSquare(2));

// 2.
// const classyGreeting = (firstName, lastName)=>{
//      return `Hey ${firstName} ${lastName}`;
//    }
//    //console.log(classyGreeting("andres","wuepa"));
//
//
// // YELL
// const yell = (str) =>{
//   return str.toUpperCase();
//   }
// // console.log(yell("ackalackadingdong"))
//
// //YELLGREETING
// const yellGreeting = (firstName,lastName) =>{
//   // let capName = classyGreeting.toUpperCase("");
//   let capName = yell(classyGreeting(firstName,lastName));
//   return capName;
// }
// console.log(yellGreeting("juano","guano"));


// The forEach() method calls a provided function once for each element in an array, in order.

// Note: forEach() does not execute the function for array elements without values.
// //array.forEach(function(currentValue, index, arr), thisValue)
// const removeDupes = (array)=>{
//    let unique = [];// it is where I am going to put just the values in the new array without duplicates
//    for (let i=0;i<array.length;i++){//loop through the array
     // if (!unique.includes(array[i])) { //bang operator to determine truthy and falsy. If it does not contain the keyed into value , push it into the new array unique. If it does contain the value don't push it.
//        unique.push(array[i]);
//      }
//
//    }
//    return unique;
//  }
//  //console.log(removeDupes([1, 2,3 ,1, 2,3,1, 2,3]));
//
// const concatAndRemoveDupes = (array0,array1)=>{
//     let combArr= array0.concat(array1);
//     return removeDupes(combArr);
// }
// console.log(concatAndRemoveDupes([1,2,3,1,2,2,3,4,4],[5,5,5,5,6,6]))
//
// const sortedGrades = (grades)=>{
// return grades.sort(function(a,b){return a-b});
// }
// // console.log(sortedGrades([1,8,72,92,100]))
// //
// // // var months = ['March', 'Jan', 'Feb', 'Dec'];
// // // months.sort();
// // // console.log(months);
//
// const middleElement = (grades) => {
//   let middle =Math.floor(grades.length / 2);// let middleElement variable in the function equal the rounded figure of the argument (array.length) divided by 2
//   return [grades.length % 2] ? (grades[middle]) : (grades[middle] + grades[middle-1]) /2; // return a truthy falsy. if modulo 2 is equal to even return argument(array keyed into middle variable) if false take the next indice and divide it by 2
// }
// console.log(middleElement([2,4,6,8,10,12,14]))
//
// //its not accurate for EVEN becuase its just pushes over to the next index instead of taking the adding the two middleElement and taking the average)
//
//
//     const median = (grades) => {
//     return middleElement(sortedGrades(grades));
//
//   }
// console.log(median([91, 85, 100, 92, 88]));

const repeat = (string, numberOfTimes=2)=>{
  for (let i = 1; i <= numberOfTimes; i++){
    return string
  }
console.log(repeat("a"));
}
