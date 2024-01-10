export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassInterface {
  new (firstName: string, lastName: string): InterStudentClass;
}

export interface InterStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements InterStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}

export function createStudent(stdnt: StudentClassInterface, firstName: string, lastName: string): InterStudentClass {
  return new stdnt(firstName, lastName);
}
