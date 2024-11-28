import { TStudent } from '../students/student.interface';
import { User } from './user.model';

const createStudentInDB = async (studentData: TStudent) => {
  // *************Using Static Instance Method*************************
  //   if (await Student.isUserExists(studentData.id)) {
  //     throw new Error('User Already Exists');
  //   }
  const result = await User.create(studentData);
  return result;
};

export const UserService = {
  createStudentInDB,
};
