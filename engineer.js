const Employee= require("./Employee");

class Engineer extends Employee{
    constructor (name, id, email){
        this.github=github;
    }
    generateGithub(){
        return this.github;
    }
    findPosition(){
        return "Engineer";
    }
}

module.exports=Engineer;