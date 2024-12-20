// const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //db calls,network
//   setTimeout(function () {
//     console.log("async task is completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// //another way
// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2 ");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// //another way

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       username: "Abinash",
//       email: "Abinash@example.com",
//       name: "Abinash Mohapatra",
//       phoneno: 8455966889,
//     });
//   }, 1000);
// });

// promiseThree
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("the promise is finally resolved"));

//new promise
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let error = false; 
  
//       if (!error) {
//         resolve({
//           username: "Abinash Das",
//           state: "Odisha",
//         });
//       } else {
//         reject("ERROR: Something Went Wrong");
//       }
//     }, 1000);
//   });
  
//   // Using the promise
//   promiseFive
//     .then((data) => {
//       console.log("Success:", data);
//     })
//     .catch((error) => {
//       console.log("Failure:", error);
//     });
  


//async await

// async function getAllUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);
    
//     const data = await response.json()
//     console.log(data);
    
//   } catch (error) {
//     console.log("E:", error);
    
//   }
// }

// getAllUser();


//  function getAllUser() {
//     try {

//       const response = fetch("https://jsonplaceholder.typicode.com/users");
  
    //   if (!response.ok) {
    //     // Throw an error if the response status is not OK
    //     throw new Error(`HTTP Error! Status: ${response.status}`);
    //   }
  
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("E:", error.message);
//     }
//   }
  
//   getAllUser();
  

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
    
// })

