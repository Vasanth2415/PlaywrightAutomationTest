function login(username, password) {  // Type 1

    if (username === "Vasantha" && password === "1234") {

        return true;
    }
    return false;
}

export { login };




export function login(username, password) { // Type 2

    return username === "Vasantha" && password === "1234";
}