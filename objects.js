//function islegal(name,age){
//    if (age<18){
//    console.log(name+ " is Not eligible to vote")
//    }else{
//    console.log(name+ " is eligible to vote")
//    }
// }
// var user1="Shiv"
// var pass=123
// var age1 =16
//
//  var user2="Somu"
//  var pass=123
//  var age2 =19
//
//  islegal(user1,age1)
//  islegal(user2,age2)


function islegal(user){
    if (user.age<18){
        console.log(user.name+ " is Not eligible to vote")
        }else{
        console.log(user.name+ " is eligible to vote")
        }
}
var user1={
        name:"shiv",
        age:16,
        address:{
                   city:"Bangalore",
                   district:"Bangalore North"}
        };
var user2={
        name:"Somu",
        age:19,
        address:{
                    city:"Sirsi",
                    district:"North Canara"}
        };
islegal(user1)