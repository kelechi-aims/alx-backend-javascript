export default function getStudentIdsSum(getListStudents) {
  const studentIds = getListStudents.map((student) => student.id);
  return studentIds.reduce((total, value) => total + value);
}
