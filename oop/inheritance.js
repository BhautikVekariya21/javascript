class user{
    constructor(username){
        this.username=username;
        
    }
    naming (){
        return `name is ${this.username}`
    }
}
class company extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password
    }
    addcourse(){
        return `course was added by ${this.username}`
    }
}

const asd = new company("sulphanilin",'sulphanilin@xyx.com','sulphanilin#@#$6576^');
console.log(asd.naming());
console.log(asd.addcourse());

const gulmol = new user('keratin');
console.log(gulmol.naming());