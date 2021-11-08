class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
        console.log(this.role)
    }
GetName(){
    return this.name;
}
GetId(){
    return this.id
}
GetEmail(){
    return this.email
}
GetRole(){
    return this.role
}
}
module.exports = Employee;