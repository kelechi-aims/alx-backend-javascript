const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    // Read the database file synchronously
    data = fs.readFileSync(path);
  } catch (error) {
    // If an error occurs while reading the file, throw an error
    throw new Error('Cannot load the database');
  }
  // Split the data into lines and remove empty lines
  const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
  // Initialize an object to store the number of students in each field
  const fieldCounts = {};
  // Skip the first line (header)
  const studentData = lines.slice(1);
  // Iterate through each line of data
  studentData.forEach((line) => {
    // Split each line into fields using comma as the delimiter
    const fields = line.split(',');
    // Ensure the line contains valid student information
    if (fields.length === 4) {
      const field = fields[3];
      // Increment the count for the current field
      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    }
  });
  console.log(`Number of students: ${studentData.length}`);
  Object.entries(fieldCounts).forEach(([field, count]) => {
    const firstNames = studentData.filter((line) => line.split(',')[3] === field).map((line) => line.split(',')[0]);
    console.log(`Number of students in ${field}: ${count}. List: ${firstNames.join(', ')}`);
  });
}

module.exports = countStudents;
