// import studentValidationSchema from '../students/student.validation';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // using zod
    // const zodValidationData = studentValidationSchema.parse(studentData);
    // will call service function to send this data
    const result = await UserServices.createStudentInDB(studentData, password);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student Is Created Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};
