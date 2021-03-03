// //// Async Example (using setTimeout)

// let wait = (milliSeconds) => {
//     var startTime = new Date().getTime();                    
//     while (new Date().getTime() < startTime + milliSeconds);
// }

// console.log("blah");
// let myCallback = () => { console.log("world"); }
// setTimeout(myCallback, 3000);
// wait(8000);
// console.log("hello");




// //// Chained Async Exmaple
// let pourCereal = () => { 
//     console.log("We poured the cereal!")
//     let pourMilk = () => { 
//         console.log("We poured the milk!");
//         console.log("Now we can eat!"); 
//     }
    
//     setTimeout(pourMilk, 3000);
// }

// setTimeout(pourCereal, 3000);
    




// //// Promises Example

// let myPromise = new Promise((returnSuccess, returnFailure) => {
//     let success = Math.random() > 0.30;
//     if (success) 
//         returnSuccess("successful task!");
//     else
//         returnFailure("there was an error!!!");
// })

// handleSuccess = (msg) => { console.log("BE HAPPY:", msg) }
// handleFailure = (msg) => { console.log("BE ANGRY:", msg) }

// myPromise.then(handleSuccess, handleFailure);





// //// Promise Example (cereal)

// let goHungry = (error) => { 
//     console.log(error, "I’m still hungry!!!"); 
// };

// let washDishes = () => {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => { resolve("We washed a bowl and spoon!") }, 5000);
//     });
// }

// let pourCereal = (result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => { resolve("We poured some cereal!") }, 3000);
//     });
// }

// let pourMilk = (result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => { 
//             spill = Math.random() > 0.95;
//             if (spill) {
//                 reject("We spilled some milk!");
//                 return
//             }
//             resolve("We poured some milk!") ;
//         }, 3000);
//     });
// }

// let eatBreakfast = (result) => {
//     console.log(result);
//     console.log("Now we can eat!");
// }

// let promiseWashDishes = washDishes();
// promiseWashDishes
//     .then(pourCereal)
//     .then(pourMilk)
//     .then(eatBreakfast)
//     .catch(goHungry);

