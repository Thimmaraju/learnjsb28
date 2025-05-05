
arr = []

//arr = { 2,5,4,6,7,9,2} // wrong syantx in JS 

arr  = [2,5,4,6,7,9,2] // correct  

//.length  - elements count 

console.log(arr.length)  //7

arr1 = ["raju", "suman", "arjun", "Basavaraju"]

arr2 = ["Raju", 2,4,5,6,7, true , undefined, null]


//arr1[index]

// index will always starts from 0 


console.log(arr1[1])

console.log(typeof(arr1)) // object 


console.log(typeof(arr1[1])) // string 

console.log(typeof(arr2[1]))


//concat // will join 2 arrays 

arr3 = arr1.concat(arr2)

console.log(arr3)


arr4 = ["wake up", "read", "work", "sleep"]

//how to add the element at the end 

arr4.push("drink water")

arr4.push("exersize")

console.log(arr4)

//unshift will add elements at the beginnig of the array 


arr4.unshift("breakfast")


arr4.unshift("kergbfiur")

console.log(arr4)

// length
// concat
// push 
// unshift 
// Pop  - Will remove the elements at the end 
// shift  -- Will remove the elements at the beginning of the Array 


arr4.pop()

arr4.pop()

arr4.pop()

arr4.shift()

arr4.shift()

arr4.shift()

console.log(arr4)

arr5 = ["wake up", "read", "work", "sleep"]

for(let i=1; i<arr.length; i++){

    arr5.pop()

}

console.log(arr5)

str = "Javascript class"

//convert string to array - split()

arr6 = str.split("")

console.log(arr6)

str = "My place is bangalore"

arr7 = str.split(" ")

console.log(arr7)

arr8 = [ 'My', 'place', 'is', 'bangalore' ]

// join()  - convert arry to string 


str2 = arr8.join("")

console.log(str2)


str3 = arr8.join(" ")

console.log(str3)

// length
// concat
// push 
// unshift 
// Pop  - Will remove the elements at the end 
// shift  -- Will remove the elements at the beginning of the Array 
// split()
// join()


arr = [2,3,5,8] // less

arr = new Array(2,3,4,5) //more  memory 

// We will avoid declaring array array as object 

//Replace one element with another element 

arr9 = ["Raju", "Darshan", "Fareedha"]

arr9[2] = "Lalitha"


console.log(arr9)

console.log(arr9.indexOf("Darshan"))


arr10 = ["wake up", "read", "work", "sleep"]

// array.forEach(element => {
    
// });


arr10.forEach(element => {

 console.log("loop starts ")

    console.log(element)

    console.log("loop ends ")
    
});

//Datadriven testing using Objects 

//Datadriven testing using array 





arr11 = ["wake up", "read", "work", "sleep"]


arr11.includes("Meditation")  // False 

arr11.includes("sleep")     //true 


if(arr11.includes("Meditation") ){

    console.log("Element is present")
}


arr12 = [2,9,6,7,4,3]

arr13 = arr12.sort()

console.log(arr13)

ar1 = ["raju", "lalitha", "Sudher", "basavaraju", "sai", "Bhargav", "abhishek"]



ar2 = ar1.sort()

console.log(ar2)





let colors = ['red', 'green', 'blue'];


for (const color of colors){

    console.log("loop starts ")
    console.log(color);
    console.log("loop ends ")
}


prices = [2,4,5,6,8,9]

 
sortedprices = prices.sort().reverse()  //  [2,4,5,6,8,9]


// reverse()

prices = [2,4,5,6,8,9]


reversedprices = prices.reverse()

console.log(reversedprices)


str = "my name is Raju"

//output = "ujaR si eman ym"

// arr = str.split("")

// console.log(arr)

// arr2 = arr.reverse()


// console.log(arr2)

// str2 = arr2.join("")

// console.log(str2)

//***** 

revstr = str.split("").reverse().join("")

console.log(revstr)



//slice 

// splice // add remove 

// map 

// filter 

// reduce 

// pop()
// pop()

// for( let item in menuitems){

// // } //Objects 


// // for( let elemnt of  jobtitles){
    
// // } // Arrays 




 //5 different buttons 
 
//  1 button
//  await page.locator("locator").click()
 
//  ============================
 
//  elements = [locatr1, locator2, locator3 , locator4, locator5]
 
 
//  for(let ele of elements ){
  
//   await page.locator(ele).click()
//  }

// slice 
// splice 
// map 
// filter 
// reduce 
