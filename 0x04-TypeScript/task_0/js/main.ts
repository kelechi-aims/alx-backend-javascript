// Define the interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Mike',
  lastName: 'Obi',
  age: 22,
  location: 'Abuja, Nigeria',
};

const student2: Student = {
  firstName: 'Divine',
  lastName: 'Fish',
  age: 25,
  location: 'Limbe, Cameroon',
};

// Create an array named studentsList
const studentsList: Student[] = [student1, student2]; 

// Render a table using Vanilla Javascript
const table = document.createElement('table');
document.body.appendChild(table);

// Append a new row for each element in the array
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
