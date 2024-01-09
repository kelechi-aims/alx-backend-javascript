export default function updateStudentGradeByCity(students, city, newGrades) {
  // Use filter to get students located in the specified city
  const studentInCity = students.filter((student) => student.location === city);

  // Use map to update grades for students in the specified city
  const updatedStudents = studentInCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (matchingGrade) {
      // If a matching grade is found, update the student's grade
      return { ...student, grade: matchingGrade.grade };
    }
    // If no matching grade is found, set the grade to 'N/A'
    return { ...student, grade: 'N/A' };
  });

  return updatedStudents;
}
