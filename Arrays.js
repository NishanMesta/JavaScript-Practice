function islegal(user){
    if (user.age<18){
        console.log(user.name+ " is Not eligible to vote")
        }else{
        console.log(user.name+ " is eligible to vote")
        }
}
var user1=[{
            name:"Vishwa",
            age:19,
            address:{
                        city:"Banglore",
                        District:"banglore North"
                    }
          },{
             name:"Venkatesh",
                         age:39,
                         address:{
                                     city:"Banglore",
                                     District:"Banglore North"
                         }
          }];
for (var i=0;i<2;i++){
    islegal(user1[i])
 }

 console.log(user1[0])

