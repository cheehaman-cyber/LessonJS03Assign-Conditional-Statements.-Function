function isValidPassword (password, username) {
    // check the length and return false if not long enough.
    if (password.length < 8) {
        console.log("Your Password is not long enough")
        return false;
    }
    // Check if it includes spaces and return false if it does.
    if (password.includes(" ")) { 
        console.log("Your Password may not include spaces")
        return false; // Yes → reject the password and stop the function
        } 
    // check if it includes the user name and return false if it does.
    if (password.includes(username)) {
        console.log("Your Password may not include your Username")
        return false; 
        // If all above pass, then return true and password is approved   
    } else {
        console.log("Your Password is approved")
        return true; 
    }
};

// Too short: only 3 characters
console.log(isValidPassword('cat', 'alex'));

// Long enough, but contains a space
console.log(isValidPassword('sun shine99', 'alex'));

// Long enough, but contains the username
console.log(isValidPassword('alex12345', 'alex'));

// Meets all three assignment rules
console.log(isValidPassword('sunshine99', 'alex'));



























