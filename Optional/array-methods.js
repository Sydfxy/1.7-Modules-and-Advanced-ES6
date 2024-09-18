const users = [
    {name: "Sydnie", isSmart:true, age:27 },
    {name: "Tong", isSmart:true, age:19 },
    {name: "JY", isSmart:true, age:26 }
]
// Map: Returning a new array of selected properties
const agesArray = users.map((user)=>{
    return user.age
})
console.log('user ages are', agesArray)

// 1. Get all their names
//const namesArray
const namesArray  = users.map((user)=>{
    return user.name
})

//
console.log('user namess are', namesArray)

// Task 2: get both their names and age (hint: return an object)
const namesAndAgesArray = users.map((user)=>{
    return {name:user.name, age:user.age}
})
console.log('user names and ages are', namesAndAgesArray)

const updatedUsers = users.map((item)=>{
    // return {name:item.name, age:item.age}
    return {name:item.name, age:item.age}
})

//Task 3: Add an if-else to check if user is below or above drinking age
// Return each object, this time with a new property {type:"adult"} or 
const usersWithType = users.map((user)=>{
    if(user.age >= 21){
        //Setting a new property
        user.type = "Adult"
    } else {
        user.type = "Minor"
    }
    return user
})

console.log('Users with type are', usersWithType)