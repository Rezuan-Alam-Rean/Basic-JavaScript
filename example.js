myFun = function(c,d){
    console.log("Hello World");
    // console.log(this);
    console.log(this.a + this.b + c + d);
}
// myFun();
// call method 
myFun.call({a: 3 , b:4}, 5 ,7);

// apply method
myFun.apply({a: 3 , b:4}, [5,7]);

// bind method
let bound = myFun.bind({a: 3 , b:4});
bound(5,7);
