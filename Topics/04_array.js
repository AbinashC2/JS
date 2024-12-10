const array_new = ["abinash", 256 , "Kaiseema" , 5698 ]

console.log(array_new);


const new_array = Symbol("key 1");

const new_obj = {
        name : "Abinash Mohapatra",
        Age : 23 ,
        email : "Abinashmohapatra@gmail.com",
        [new_array] : "this is a symbol data type"
}


console.log(new_obj.name);

console.log(new_obj[new_array]);
console.log(new_obj.email);


