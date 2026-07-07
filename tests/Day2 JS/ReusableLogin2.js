import { login } from './ReusableLogin1.js';

const username = "Vasantha";
const password = "1234";

if (login(username, password)) {
    console.log("User logged in successfully");
}
else {
    console.log("Invalid username or password");
}

