// control flow

let userEmail = []

if(userEmail.length === 0){
    console.log("array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object// array  is empty");
    
}

// nullish colescing operator

let val1 = 5 ?? 10 
console.log(val1);


let val2 = null ?? 15
console.log(val2);

let val3 = undefined ?? 19
console.log(val3);

let val4 =  undefined ?? null ?? 10 ?? 20
console.log(val4);

//terniary operator
teaPrice = 10
teaPrice <= 80 ? console.log("price is less"): console.log("price is higher");

// swtich case
switch (key) {
    case value:
        
        break;

    default:
        break;
}