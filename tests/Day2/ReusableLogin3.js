import {login} from './ReusableLogin1.js';

const username = "Vasantha";
const password = "12345abcd";

if(login(username,password)){
    console.log("User logged in successfully")
}
else{
    console.log("Invalid Username or password");
}