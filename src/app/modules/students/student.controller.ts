import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

// for getting all students
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    // send response
    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// for getting single students
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // send response
    res.status(200).json({
      success: true,
      message: 'Students is retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// for deleteing single students
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    // send response
    res.status(200).json({
      success: true,
      message: 'Students is deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
