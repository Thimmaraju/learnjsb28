console.log(4+5)

a= 20

b= 30 

c = a+b

console.log(c)

console.log(45-20)

console.log(4*5)

console.log(8/4)


console.log(12%3) // reaminder 


// ++ 
// --

x = 20

x++  // x =x+1  // Increment operator 

console.log(x)

y = 23

y--  //decrement operator 

console.log(y)

// == vs ===

console.log(2=="2")  // true 

//== will compare only values but not datatypes 


console.log(2==="2")  //false 

//=== will compare values but also datatypes of values

console.log(4>=4)

console.log("4" != "4")


console.log((2==="2") && (4>3))  //false


console.log((2==="2") || (4>3)) // true 


console.log( !(2==="2"))

x= 6 

x+=3  // x= x+3


x-= 4  // x = x-4

x *=5  // x = x*5


console.log(x)


// conditional operator / Ternary Operator 


x = "Raju"
 
y = "Arjun"

z =  2==="2" ? x: y

console.log(z)
 

workers = 4>3 ? 2 : 1

console.log(workers)

price1 = 120 

price2 = 60

total = 180 

console.log(price1+price2 == total )



// vehiclestatus = "Sold"

// vihiclestatus = "Inprogress"

Payment = false 


status_Of_Vehicle = Payment ? "Sold" : "Inprogress"

console.log(status_Of_Vehicle)

//await expect("Sold").tobe( status_Of_Vehicle)  //Pass

//+ - Addition 

k = 3+6  //9  -- Addition 

stuname = "Raju" + "G"  //RajuG - concatination (Joining 2 strings )


//Coersion 


sum = "4"+ "5"

console.log(sum)  //"45"


vaule3  = "Raju" + 5

console.log(vaule3)


console.log(10+20+30+"45"+ 10 + 20) 

// 102030451020

//60451020
