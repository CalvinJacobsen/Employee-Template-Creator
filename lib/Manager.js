const Employee = require('./Employee.js');


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.getRole();
    }
    getOffice() {
        return this.officeNumber;
    }
    getRole() {
        let role = super.getRole();
        role = 'Manager';
        return role;
    }
}

module.exports = Manager;

