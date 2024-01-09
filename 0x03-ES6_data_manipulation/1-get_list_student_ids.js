export default function getListStudentIds(arrayOfStudents) {
  if (!Array.isArray(arrayOfStudents)) {
    return [];
  }
  const studentIds = arrayOfStudents.map((student) => student.id);

  return studentIds;
}
