// //encapsulation

// //Binding the Data between the Methods 


// class student {
 
//     m1(){
	
// 	   console.log("sample m1 ")
// 	}
	
// 	m2(){
	
// 	   console.log("sample m2 ")
// 	}
 
//  }

//  const stu1 = new student()

//  stu1.m2()


//  class Employee {

//      gettheemployeedetails( value1 , value2 , value3){

//         this.empname = value1
//         this.empage = value2
//         this.empOrg = value3
   

//      }

//      displaydetails(){

//         console.log(this.empname, this.empage, this.empOrg)
//      }

//  }

//  const emp1 = new Employee()

//  //emp1.gettheemployeedetails("Deekshit", 27, "DBS QA")

//  emp1.displaydetails()

// //  setter 

// //  getter 

// //2 Inheritance 



// class A{

//     m1(){

//         console.log("This is M1 Method")
//     }

//     m2(){

//         console.log("This is M2 Method")
//     }

//     m3(){

//         console.log("This is M3 Method")
//     }
// }


// class B extends A{


//     m4(){

//         console.log("This is M4 Method")
//     }

//     m5(){

//         console.log("This is M5 Method")
//     }

//     m6(){

//         console.log("This is M6 Method")
//     }


// }

// class C extends A {


//     m7(){

//         console.log("This is M7 Method")
//     }

//     m8(){

//         console.log("This is M8 Method")
//     }

//     m9(){

//         console.log("This is M9 Method")
//     }

// }

// const obj = new C()

// obj.m1()  // class A 

// obj.m5() // class B

// obj.m8() // class C



// class A{

//     add(num1, num2){

//         console.log(num1)
//         console.log(num2)

//         console.log("result = " +(num1+num2) )
//     }

//     displayMessage(){

//         console.log("This Method is from Parent")
//     }

//     m1(){

//         console.log("This is M1 Method")
//     }

//     m2(){

//         console.log("This is M2 Method")
//     }

//     m3(){

//         console.log("This is M3 Method")
//     }
// }


// class B extends A{


    
//     add(num1, num2, num3){

//         console.log(num1)
//         console.log(num2)

//         console.log(num3)


//         console.log("result = " +(num1+num2+num3) )
//     }

//     displayMessage(){

//         console.log("This Method is from Child")
//     }


//     m4(){

//         console.log("This is M4 Method")
//     }

//     m5(){

//         console.log("This is M5 Method")
//     }

//     m6(){

//         console.log("This is M6 Method")
//     }


// }

// const obj1 = new A()

// obj1.displayMessage()  // Method overriding 

// //Instead executing parent class method it is executiong child class method when the method signature 

// // same name 
// // same num of params 


// obj1.add(4,6,7)  // Method Over Loading 



class student {


    x = "Raju"

    m1(){

        console.log("Merhtod  M1 ")
    }


    m2(){

        console.log("Merhtod  M2 ")
    }
}

student.prototype.y = "Murali" // Prototyped variable 

student.prototype.m3 = function (){

    console.log("Method M3")
}

// this is Prototyped method

const ob1 = new student()

console.log(ob1.x)

 console.log(ob1.y) // this is possible to access now 

ob1.m3()


const ob2 = new student()

console.log(ob2.x)

 console.log(ob2.y) 

 ob2.m3()

 // Abstraction - not supported 

 // Interfaces - not supported 

//  What is differece between JS and TS 

//  JS == TS