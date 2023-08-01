function Employee (_personname, _companyname, _jobposition, _salary ){
    this.personname = _personname;
    this.companyname = _companyname;
    this.jobposition = _jobposition;
    this.salary = _salary;
}


let employee1 = new Employee("Tom Austin", "Microsoft", "Boss", "10000$");
let employee2 = new Employee("Marc Green", "Facebook", "Direktor", "15000$");
let employee3 = new Employee("Elen Doe", "Yahoo", "Employee", "9000$");


const listContainer = document.getElementById('employee');

const list = document.createElement('ul');
listContainer.appendChild(list);

const employeesList = [employee1, employee2, employee3];
for (let i = 0; i < employeesList.length; i ++){
    const employeesIndex = employeesList[i];
    const listElement = document.createElement('li');
     const listElementText = document.createTextNode(`${employeesIndex.personname} , ${employeesIndex.companyname}, ${employeesIndex.jobposition}, ${employeesIndex.salary}`);

    listElement.appendChild(listElementText);
    list.appendChild(listElement);
};



