// --- Using Outer Variables ---

let expectedUserName ="Vasantha";
let expectedPassword ="Password123";


function login(userName , password){

    if(userName === expectedUserName && password === expectedPassword){

        return "Success";
    }
    return "Failure";

}

console.log(login("Vasantha","Password123"));
console.log(login("username","password"));