// Code your solution here
//function findMatching(collection,driver){
    //for (const user of collection){
        //if (user.name === driver){
        //return (user.name)
       // }
    //}
//}
//findMatching(drivers,"bobby")

//const { stringContaining } = require("expect");

function findMatching(drivers, stng){
   let  theName= drivers.filter(driver => driver === stng || driver === stng.toLowerCase())
   return theName;
}
function fuzzyMatch(drivers, string) {
    let name=drivers.filter(driver => driver.slice(0,string.length) === string)
    return name;
}
function matchName (drivers,string){
let names = drivers.filter(driver =>driver.name === string)
return names;
}