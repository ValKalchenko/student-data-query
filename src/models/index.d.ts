import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerStudentCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentCourse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly requirements?: string | null;
  readonly studentID: string;
  readonly courseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudentCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudentCourse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly requirements?: string | null;
  readonly studentID: string;
  readonly courseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StudentCourse = LazyLoading extends LazyLoadingDisabled ? EagerStudentCourse : LazyStudentCourse

export declare const StudentCourse: (new (init: ModelInit<StudentCourse>) => StudentCourse) & {
  copyOf(source: StudentCourse, mutator: (draft: MutableModel<StudentCourse>) => MutableModel<StudentCourse> | void): StudentCourse;
}

type EagerCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly StudentCourses?: (StudentCourse | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly StudentCourses: AsyncCollection<StudentCourse>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Course = LazyLoading extends LazyLoadingDisabled ? EagerCourse : LazyCourse

export declare const Course: (new (init: ModelInit<Course>) => Course) & {
  copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

type EagerStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly major: string;
  readonly careerCredits: number;
  readonly graduationYear: number;
  readonly StudentCourses?: (StudentCourse | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly major: string;
  readonly careerCredits: number;
  readonly graduationYear: number;
  readonly StudentCourses: AsyncCollection<StudentCourse>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Student = LazyLoading extends LazyLoadingDisabled ? EagerStudent : LazyStudent

export declare const Student: (new (init: ModelInit<Student>) => Student) & {
  copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}