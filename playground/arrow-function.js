var square= (x) => x * x;           //  node playground/arrow-function.js
console.log(square(9));

var user={
    name:"Prakash",
    sayHi:() => {                        //error function
        console.log(`Hello`);
        //console.log(`Hello ${this.name}`);  // it cannot display name
    },
   sayHiAlt (){                     //regular function
        console.log(arguments);
    console.log(`Hello ${this.name}`);   // it displays name
}
};

 //user.sayHi();
user.sayHiAlt(1,2,3);