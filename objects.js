// var x = 10

// var y = 20 

// console.log(x+y)

// console.log(x*y) 

//=======================================

creds = {

    username : "Admin",
    password  : "admin123"
}

console.log(creds.username)

console.log(creds['password'])

student = {

    firstname : "Bhargav",
    lastname : "Gowda",
    place : "Bangalore",
    age :  26
}

console.log(typeof(student.age))

console.log(student.age)

console.log(student['age'])

student['gender'] = "Male"

console.log(student.gender)

console.log(student.fathername)

student['fathername'] = "Abc" // Add new 

console.log(student.fathername)


student['place'] = "Chennai"  // Modify / update 

console.log(student.place)

delete student.age

console.log(student.age)

//UI 
//API 

menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu4 : "Time"

}


console.log(menuitems.menu1)


for(let item in menuitems){

    console.log("loop starts here")

    console.log(menuitems[item])

    console.log("loop Ends here")
}


studentname1 = "Arjun"

studentname2 = "Deekshit"

sentence = `${studentname1} and ${studentname2} are friends`

console.log(sentence)