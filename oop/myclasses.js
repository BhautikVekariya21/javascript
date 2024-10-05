// Define a class for user
class user {
    constructor(username, password, email) {
        this.username = username; // Set username
        this.password = password; // Set password
        this.email = email; // Set email
    }

    // Method to return the encrypted password (placeholder implementation)
    encryptedpassword() {
        return `encrypted password is ${this.password}`; // Simply returns the password
    }

    // Method to return the user's name
    naming() {
        return `name is ${this.username}`; // Returns the username
    }
}

// Create an instance of the user class
const juniper = new user("juni", "junii43u46@#", 'junip@gmail.com');
console.log(juniper.encryptedpassword()); // Call encryptedpassword method
console.log(juniper.naming()); // Call naming method

// Function constructor for user (alternative method)
function use(username, password, email) {
    this.username = username; // Set username
    this.password = password; // Set password
    this.email = email; // Set email
}

// Add encryptedpassword method to Object's prototype
Object.prototype.encryptedpassword = function () {
    return `encrypted password is ${this.password}`; // Access password from the instance
}

// Add naming method to Object's prototype
Object.prototype.naming = function () {
    return `name is ${this.username}`; // Access username from the instance
}

// Create an instance using the function constructor
const juliper = new use("juli", "jullii43u46@#", 'junip120@gmail.com');
console.log(juliper.encryptedpassword()); // Call encryptedpassword method
console.log(juliper.naming()); // Call naming method


// Output Example
// The console will display:

// encrypted password is junii43u46@#
// name is juni
// encrypted password is jullii43u46@#
// name is juli
