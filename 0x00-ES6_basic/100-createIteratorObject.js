export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        const currentEmployees = allEmployees[currentDepartment];

        if (currentEmployeeIndex < currentEmployees.length) {
          const result = {
            value: currentEmployees[currentEmployeeIndex],
            done: false,
          };
          currentEmployeeIndex += 1;
          return result;
        }
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
        return this.next();
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
