function sayHello(){ // Basic Function

    const message = "Hello, Vasantha";
    console.log(message);
}

sayHello();


function login(username,password){ // Parameterised Function

const validUsername = "Vasantha";
const validPassword = "Vasantha123";

if(username === validUsername && password === validPassword){
    return "Login Successful";
} else{
    return "Login Failure";
}

}

try
{console.log(login("Vasantha","Vasantha123"));
console.log(login("Vasan","12345"));
}

catch(error){
    console.log(error);
}