// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeesArray = [];
let employment;
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  /* Enter employee first name */
  const firstName = prompt("Enter first name:");
  /* Enter employee last name */
  const lastName = prompt("Enter last name:");
  /* Enter employee salary */
  const salary = prompt("Enter salary:");

  const newHire = { firstName, lastName, salary };
  employeesArray.push(newHire);
  employment = confirm("Do you want to add another employee?");
  if (employment) {
    collectEmployees();
  }
  else {
    createEmployeeCard(employeesArray);
    displayEmployees(employeesArray);
  }
}

function createEmployeeCard(employeesArray){
  console.log('employeesArray', employeesArray)
}
// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += newHire.salary[i];
  }
  const avgSalary = sum / employeesArray.length;
  console.log("The average employee salary between our " + employeesArray.length+1 + " employees is " + avgSalary);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let x = Math.floor((Math.random() * employeesArray.length) + 1);
  console.log('Congratulations to ' + employeesArray.firstName[x] + ' ' + employeesArray.lastName[x] + ', our random drawing winner!');
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/
// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');
  // Clear the employee table
  employeeTable.innerHTML = '';
  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();
  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);