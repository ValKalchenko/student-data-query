// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StudentCourse, Course, Student } = initSchema(schema);

export {
  StudentCourse,
  Course,
  Student
};