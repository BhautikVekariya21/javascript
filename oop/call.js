function local(username) {
    this.username=username;
    console.log(`${username}`);
    console.log('name called');
}
function createuser(username,email,password){
    local.call(this,username);
    this.email=email;
    this.password =password;
    
}
const soup =new createuser('soupx','soup@sopee.com','12dnbdh321@#$')
console.log(soup);