// Define a User class
class User {
    constructor(username) {
        this.username = username; // Initialize username
    }
    
    // Method to return the user's name
    naming() {
        return `Name is ${this.username}`; // Return a string with the username
    }
}

// Define a Company class that extends User
class Company extends User {
    constructor(username, email, password) {
        super(username); // Call the parent class constructor
        this.email = email; // Initialize email
        this.password = password; // Initialize password
    }

    // Method to indicate that a course was added
    addCourse() {
        return `Course was added by ${this.username}`; // Return a string with the username
    }
}

// Create an instance of Company
const asd = new Company("sulphanilin", 'sulphanilin@xyx.com', 'sulphanilin#@#$6576^');
console.log(asd.naming()); // Call naming method and log the result
console.log(asd.addCourse()); // Call addCourse method and log the result

// Create an instance of User
const gulmol = new User('keratin');
console.log(gulmol.naming()); // Call naming method and log the result
