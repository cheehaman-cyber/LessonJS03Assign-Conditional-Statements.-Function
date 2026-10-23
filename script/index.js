//Password first, all three rules must pass.
//Min 8 password character Password length
//“Is there a space anywhere?”
//“Is the username anywhere inside the password?”

function isValidPassword(password, username) { // Receive two text values
    if (password.length >= 8) { // Is the password at least 8 characters?
        if (password.includes(' ')) { // Does it contain a space?
        return false; // Yes → reject the password and stop the function
        } 
        if (password.includes(username)) { // Does it contain the username?
        return false; // Yes → reject the password and stop the function    
        } // End of the username check
        return true; // All three rules passed → accept and stop
    } // End of the length check
    return false; // Too short → reject and stop
} // End of the function

console.log(isValidPassword('alex12345', 'alex')); // false: contains username
console.log(isValidPassword('sun shine99', 'alex')); // false: contains a space
console.log(isValidPassword('cat', 'alex')); // false: too short
console.log(isValidPassword('sunshine99', 'alex')); // true: passes all rules


function isValidPassword (password, username) {
    // Requirement 1: Reject if too short
    if (password.length < 8) {
        return false;
    }
    // Requirement 2: Reject if a space is found
    if (password.includes(' ')) { // Does it contain a space?
        return false; // Yes → reject the password and stop the function
        } 
    // Requirement 3: Reject if the username is found
    if (password.includes(username)) { // Does it contain the username?
        return false; // Yes → reject the password and stop the function    
        } else {
    return true; // All requirements passed: approve
    }
}

console.log(isValidPassword('alex12345', 'alex')); // false: contains username
console.log(isValidPassword('sun shine99', 'alex')); // false: contains a space
console.log(isValidPassword('cat', 'alex')); // false: too short
console.log(isValidPassword('sunshine99', 'alex')); // true: passes all rules






























