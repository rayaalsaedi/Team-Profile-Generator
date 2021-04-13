class Employee {
constructor (name, id, email){
    this.name=name;
    this.id=id;
    this.email=email;

}
generateName(){
    return this.name
};
generateId(){
    return this.id
};
generateEmail(){
    return this.email
};
findPosition(){
    return "Employee"
};

}

module.exports=Employee;