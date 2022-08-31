// Write your solution in this file!
let employee = {
    name: "value1",
    streetAddress: "value2",}

    employee


function updateEmployeeWithKeyAndValue(employee, key, value) {
const copyOfEmployee = {...employee, 
     [key]: value }
return copyOfEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value
     return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const copyOfEmployee = {...employee}
    delete copyOfEmployee.name
    return copyOfEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
delete employee.name
return employee
}