//Fundamertals of Java Script
// Arrays and objects
// Async js coding
// Foreach, map, filter, find, indexOf.

//foreach
var arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val+"Hello");
})

//map
var arr1 = [1, 2, 3, 4]; //map creates a blank array of the size of the previous array
var newArr = arr1.map(function(val){ //map iterates on every element and make store them into a new array
    return 13;
})
 console.log(newArr); //the newArr has 13 as element and store for four times as the size of the previous array

//filter to be used to create new array and the size of new array will be size equal or less than that of original array
var arr2 = [1,2,3,4,5,6,7];
var newArr1 = arr2.filter(function(val){
    if(val>3) { return true;}
    return false;
})
console.log(newArr1);

//find -> to find the first member
var arr2 = [1,2,3,4];
var ans = arr2.find(function(val){
    if(val===2) return val;
})
console.log(ans)

//Objects {} key : value pairs
var obj = {
    name:"Shubham",
    age: 21
}
Object.freeze(obj); //value cant be modified
obj.name; //accessing
obj['name'] //accessing

// var arr = [1,3,2];
// function abcd(a,b,c){ //function length we can get by using abcd.length as functions are also objects
//The function length always will be equal to number of parameters present in the function definition
// }

//func return
function abcd(){
return 12;
}console.log(abcd());


//Asynchronous JavaScript Coding
//use of await --> its necessity --> 
//line by line execution is synchronous
//and the code that is async nature then send that code to side stack 
// and make run the code that is in sync format and after the complete sync code runs 
// then check for the async code had completed or not, if completed then bring it into main stack then run it.

async function abc(){  //async keyword should be used if there are any async code in the function
    var blob = await fetch('https://randomuser.me/api/'); //goes to this website and bring some data but here in getting the data we dont know what amount of ti8me would be occuring so use await
    //fetch is by default asynchronous becuase it fetches from third party
    var ans = await blob.json(); //converting it into json

    console.log(ans);
}

abc();