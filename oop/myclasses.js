class user{
    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email;
    }
     encryptedpassword(){
        return `encrypted password is ${this.password}`;
    }
    naming (){
        return `name is ${this.username}`
    }
}

const juniper = new user("juni","junii43u46@#",'junip@gmail.com');
console.log(juniper.encryptedpassword());
console.log(juniper.naming());


function use(username,password,email){
    this.username=username;
    this.password=password;
    this.email=email;
}
  Object.prototype.encryptedpassword = function (){
    return `encrypted password is ${this.password}`;
}
 Object.prototype.naming = function (){
    return `name is ${this.username}`
}


const juliper = new use("juli","jullii43u46@#",'junip120@gmail.com');
console.log(juliper.encryptedpassword());
console.log(juliper.naming());
