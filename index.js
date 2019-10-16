

// function oddOne(arr) {
//     let arr = [2, 10, 22, 4, 8, 6, 4];
//     let x = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             x = arr.indexOf(arr[i]);
//             return x;
//         }
//     }
//     if (!x.length) {
//         return -1;
//     }
// }
// console.log(oddOne(arr));
// // Correction :
// function oddOne(arr) {
//     return arr.findIndex(x => x % 2 != 0);
// }




// function friends(n) {
//     let n = 10;
//     return Math.floor((n/3)*2+1);
// }
// console.log(friends(n));



// /* Pour hacher un mot de passe en md5 : 
// */
// var crypto = require('crypto');

// function passHash(str) {
//   return crypto.createHash('md5').update(str).digest('hex')
// }




// function getAges(sum,difference){
//     if (sum>0 && difference>0 && difference<=sum) {
//         let x =[sum/2+difference/2, sum-(sum/2+difference/2)];
//             return x
//             } else {
//             return null;
// }
// };
// console.log(getAges(80,80));


// function maxMultiple(divisor, bound) {
//     for (let i = bound; i > 0; i--) {
//         if (Number.isInteger(i / divisor)) {
//             return i
//         }
//     }
// }
// console.log(maxMultiple(2, 7));

// //correction :

// function maxMultiple(divisor, bound) {
//     return bound - bound % divisor
// }



// // ENLEVER LES DOUBLONS D4UN TABLEAU !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function minValue(values){
//     let arr = Array.from(new Set(values))
//     return parseInt(arr.sort().join(''));
//   }
// console.log(minValue([2,3,5,3,5,5,8,7,9]));




// function high(x) {
//     const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//     x = x.replace(/[ùûü]/g, "u").replace(/[îï]/g, "i").replace(/[àâä]/g, "a").replace(/[ôö]/g, "o").replace(/[éèêë]/g, "e").replace(/ç/g, "c").replace(/[',."!?:]/g, " ");
//     x = x.split(" ");
//     let result = [];
//     x.forEach(element => {
//         let words = element.split('');
//         let y = 0;
//         for (let i = 0; i < words.length; i++) {
//             let value = alphabet.indexOf(words[i]) + 1;
//             y += value;
//         }
//         result.push(y)
//     });
//     result = result.indexOf(Math.max(...result))
//     return x[result];

// }
// console.log(high("salut je suis un wapiti"));




// var freewayGame = function (distKmToExit, mySpeedKph, otherCars) {
//     let count = 0;
//     let a = 0;
//     let conversion = [];
//     let carBefore = [];
//     let carAfter = [];
//     let tpsInToEx = (distKmToExit / mySpeedKph) * 60;
//     otherCars.forEach(element => {
//         element[0]=element[0].toFixed(20)
//         let x = element[0].toString();
//         conversion.push(x.split("."));
//         conversion.forEach(element => {

//             if (element[1] == undefined) {
//                 a = parseInt(element[0]);

//             } else if (parseFloat(element.join('')) > 0) {      
//                 a = parseInt(element[0]) + (element[1] / 1000000000000000000000) * 6;

//             } else if (parseFloat(element.join('')) < 0) {   
//                 a = parseInt(element[0]) - (element[1] / 1000000000000000000000) * 6;
//             }
//         });

//         if (a < 0) {
//             carBefore.push((distKmToExit / element[1]) * 60 + a)

//         } else if(a > 0){
//             carAfter.push((distKmToExit / element[1]) * 60 + a)
//         }
//     });
//     console.log("Before");
//     console.table(carBefore);
//     console.log("after"); 
//     console.table(carAfter);
//     console.log("------");

//     console.log(tpsInToEx);    

//     for (let i = 0; i < carBefore.length; i++) {
//         if (carBefore[i] >= tpsInToEx) {
//             count++;
//             console.log(count)

//         }
//     }
//     for (let i = 0; i < carAfter.length; i++) {
//         if (carAfter[i] <= tpsInToEx) {
//             count--;  
//             console.log(count)

//         }
//     }    
//     return count;
// }
// //je depasse = 2
// console.log(freewayGame(50.0, 130.0, [[-1.0, 120.0], [-1.5, 120.0]]))

// //me depasse et je depasse = 0
// console.log(freewayGame(50.0, 120.0, [[-1.0, 115.0], [-1.5, 110.0], [1.0, 130.0], [1.5, 130.0]]))

// //je ne peux pas depasser = 0
// console.log(freewayGame(30.0, 100.0, [[-1.0, 110.0], [-0.7, 102.0], [-1.5, 108.0]]))




// var freewayGame = function (distKmToExit, mySpeedKph, otherCars) {
//     let count = 0;
//     let a = 0;
//     let carBefore = [];
//     let carAfter = [];
//     let tpsInToEx = (distKmToExit / mySpeedKph) * 60 * 60;
//     otherCars.forEach(element => {
//         if(element[0]<0){
//             carBefore.push((distKmToExit/element[1]*60*60) + (element[0]*60))
//         } else if (element[0]>0) {
//             carAfter.push((distKmToExit/element[1]*60*60) + (element[0]*60))
//         }
//     });
//     for (let i = 0; i < carBefore.length; i++) {
//         if (carBefore[i] >= tpsInToEx) {
//             count++;
//         }
//     }
//     for (let i = 0; i < carAfter.length; i++) {
//         if (carAfter[i] <= tpsInToEx) {
//             count--;  
//         }
//     }    
//     return count;
// }


// console.log(freewayGame(50, 130, [[-2.9779756092978737,116.7509326778851],[1.1999081436933778,122.29957678132095],[4.247647461545231,114.87340911269379],[4.452613271477993,118.27630039370646],[2.9705871377273123,118.26937146932171]]))


// function riders(stations) {
//     let count = 0;
//     let x = []
//     for (let i = 0; i < stations.length; i++) {
//         count+=stations[i];
//         if (count>100){
//             count = stations[i];
//             x.push(count)
//         }
//     }
//     return x.length+1
// }

// 5
// console.log(riders([42,18,9,39,37,24,44,6,45,10,44,46,28,45,16]));
// 4
// console.log(riders([47, 50, 34, 8, 27, 50, 30, 23]))




// function factorial(n) {
//     let result = [];
//     let x = 1;
//     if (n === 0) {
//         return 1
//     }
//     if (n > 12 || n < 0) {
//         return new RangeError(["n must be between 0 and 12"])
//     } else if (n < 12) {
//         do {
//             n = n - 1
//             result.push(n + 1)
//         } while (n > 0)
//         result.forEach(element => {
//             x *= element
//         });
//         return x
//     }
// }

// console.log(factorial(-5))
// console.log(factorial(15))


// function letterFrequency(text){
//     let array =[];
//     let array2=[];
//     let array3=[]
//     let result=1;
//     let x = text.replace(/[ùûü]/g, "u").replace(/[îï]/g, "i").replace(/[àâä]/g, "a").replace(/[ôö]/g, "o").replace(/[éèêë]/g, "e").replace(/ç/g, "c").replace(/[',-."!?:]/g, " ").replace(/ /g,"");
//     x=x.toLowerCase();
//     x= x.split('');
//     x=x.sort();
//     for(let i=1;i<x.length+1;i++){
//         if(x[i]!==x[i-1]){
//             array.push(x[i-1]+result*1);
//             result=1;
//         } else {
//             result+=1;
//         }
//     }
//     for(let j = 0;j<array.length;j++){
//         array2.push(array[j].split(''));
//     }

//     array2.forEach(element => {
//         element[1]=element[1]*1;
//         element.sort();
//     });

//     array2.sort().reverse()
//         array2.forEach(element => {
//             element.reverse();
//             array3.push(element)
//         });
//         for(let y = 0;y<array2.length-1;y++){
//             if(array2[y][1]==array3[y+1][1]){
//                 console.log(array2[y])
//             } else {

//             }
//         }


//     return array3
// }

// console.log(letterFrequency("As long as I'm learning something, I figure I'm OK - it's a decent day."))



// function queue(queuers, pos) {
//     let x=[]
//     let count = 0
//     let y = 0
//     queuers.forEach(element => {
//         x.push(element)
//     });
//         do{
//             y = x.shift()
//             if(y>0){
//             y -= 1
//             count += 1
//         }
//             x.push(y)
//             console.log(x)

//         } while(x[pos]>0)

//  return count
// }
// //18
// console.log(queue([2, 5, 3, 6, 4], 1))
// //17
// console.log(queue([2, 5, 3, 6, 4], 4))


function calculate(str) {
    let add = 0
    let sous = 0
    let plus = []
    let moins = []
    let result = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    str=str.replace(/plus/g,',').replace(/minus/g,'-')
    str=str.split('-')
    for(let i=0;i<str.length;i++){
        if(str[i].includes(','))
    result.push(str[i].split(','))
    }
    result.forEach(element => {
        for(let i=0;i<element.length;i++){
            plus.push(parseInt(element[i]))
        }
    });
    for(let i=1;i<str.length;i++){
        moins.push(parseInt(str[i]))
    }
    if(plus.length>0){
    add=plus.reduce(reducer)
    }
    if(moins.length>0){
    sous=moins.reduce(reducer)
    }
    console.log(plus)
    console.log(moins)
    console.log(sous)
    console.log(add)
    return (add - sous).toString()
}

console.log(calculate("1plus2minus3plus10minus5"));