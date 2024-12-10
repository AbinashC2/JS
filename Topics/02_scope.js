// Global Scope

let globalVar = "I am global";

function showGlobalVar() {
  console.log( "first" ,globalVar); // Accessible here
}

showGlobalVar();
console.log(globalVar); // Accessible here too


// Local Scope
    // Function Scope

function localExample() {
    let localVar = "I am local to this function";
    var localVar2 = "I am local to this function using var";

    console.log(localVar2); // Accessible here
  }
  
  localExample();
  console.log(localVar2); // Error: localVar is not defined
  
    // Block Scope
    if (true) {
        let blockVar = "I am block-scoped";
        const anotherBlockVar = "I am also block-scoped";
        var functionVar = "I am function-scoped";
        console.log(blockVar); // Accessible here
      }
      
      // console.log(blockVar); // Error: blockVar is not defined
      console.log(functionVar); // Accessible here due to function scope
      

  