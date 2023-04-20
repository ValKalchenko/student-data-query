/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Student } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StudentUpdateForm(props) {
  const {
    id: idProp,
    student: studentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    lastName: "",
    major: "",
    careerCredits: "",
    graduationYear: "",
    courseTitle: "",
    courseCode: "",
    requirementsMet: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [major, setMajor] = React.useState(initialValues.major);
  const [careerCredits, setCareerCredits] = React.useState(
    initialValues.careerCredits
  );
  const [graduationYear, setGraduationYear] = React.useState(
    initialValues.graduationYear
  );
  const [courseTitle, setCourseTitle] = React.useState(
    initialValues.courseTitle
  );
  const [courseCode, setCourseCode] = React.useState(initialValues.courseCode);
  const [requirementsMet, setRequirementsMet] = React.useState(
    initialValues.requirementsMet
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = studentRecord
      ? { ...initialValues, ...studentRecord }
      : initialValues;
    setName(cleanValues.name);
    setLastName(cleanValues.lastName);
    setMajor(cleanValues.major);
    setCareerCredits(cleanValues.careerCredits);
    setGraduationYear(cleanValues.graduationYear);
    setCourseTitle(cleanValues.courseTitle);
    setCourseCode(cleanValues.courseCode);
    setRequirementsMet(cleanValues.requirementsMet);
    setErrors({});
  };
  const [studentRecord, setStudentRecord] = React.useState(studentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Student, idProp)
        : studentModelProp;
      setStudentRecord(record);
    };
    queryData();
  }, [idProp, studentModelProp]);
  React.useEffect(resetStateValues, [studentRecord]);
  const validations = {
    name: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    major: [{ type: "Required" }],
    careerCredits: [{ type: "Required" }],
    graduationYear: [{ type: "Required" }],
    courseTitle: [],
    courseCode: [],
    requirementsMet: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          lastName,
          major,
          careerCredits,
          graduationYear,
          courseTitle,
          courseCode,
          requirementsMet,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Student.copyOf(studentRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "StudentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              lastName,
              major,
              careerCredits,
              graduationYear,
              courseTitle,
              courseCode,
              requirementsMet,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              lastName: value,
              major,
              careerCredits,
              graduationYear,
              courseTitle,
              courseCode,
              requirementsMet,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Major"
        isRequired={true}
        isReadOnly={false}
        value={major}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              lastName,
              major: value,
              careerCredits,
              graduationYear,
              courseTitle,
              courseCode,
              requirementsMet,
            };
            const result = onChange(modelFields);
            value = result?.major ?? value;
          }
          if (errors.major?.hasError) {
            runValidationTasks("major", value);
          }
          setMajor(value);
        }}
        onBlur={() => runValidationTasks("major", major)}
        errorMessage={errors.major?.errorMessage}
        hasError={errors.major?.hasError}
        {...getOverrideProps(overrides, "major")}
      ></TextField>
      <TextField
        label="Career credits"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={careerCredits}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              lastName,
              major,
              careerCredits: value,
              graduationYear,
              courseTitle,
              courseCode,
              requirementsMet,
            };
            const result = onChange(modelFields);
            value = result?.careerCredits ?? value;
          }
          if (errors.careerCredits?.hasError) {
            runValidationTasks("careerCredits", value);
          }
          setCareerCredits(value);
        }}
        onBlur={() => runValidationTasks("careerCredits", careerCredits)}
        errorMessage={errors.careerCredits?.errorMessage}
        hasError={errors.careerCredits?.hasError}
        {...getOverrideProps(overrides, "careerCredits")}
      ></TextField>
      <TextField
        label="Graduation year"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={graduationYear}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              lastName,
              major,
              careerCredits,
              graduationYear: value,
              courseTitle,
              courseCode,
              requirementsMet,
            };
            const result = onChange(modelFields);
            value = result?.graduationYear ?? value;
          }
          if (errors.graduationYear?.hasError) {
            runValidationTasks("graduationYear", value);
          }
          setGraduationYear(value);
        }}
        onBlur={() => runValidationTasks("graduationYear", graduationYear)}
        errorMessage={errors.graduationYear?.errorMessage}
        hasError={errors.graduationYear?.hasError}
        {...getOverrideProps(overrides, "graduationYear")}
      ></TextField>
      <TextField
        label="Course title"
        isRequired={false}
        isReadOnly={false}
        value={courseTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              lastName,
              major,
              careerCredits,
              graduationYear,
              courseTitle: value,
              courseCode,
              requirementsMet,
            };
            const result = onChange(modelFields);
            value = result?.courseTitle ?? value;
          }
          if (errors.courseTitle?.hasError) {
            runValidationTasks("courseTitle", value);
          }
          setCourseTitle(value);
        }}
        onBlur={() => runValidationTasks("courseTitle", courseTitle)}
        errorMessage={errors.courseTitle?.errorMessage}
        hasError={errors.courseTitle?.hasError}
        {...getOverrideProps(overrides, "courseTitle")}
      ></TextField>
      <TextField
        label="Course code"
        isRequired={false}
        isReadOnly={false}
        value={courseCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              lastName,
              major,
              careerCredits,
              graduationYear,
              courseTitle,
              courseCode: value,
              requirementsMet,
            };
            const result = onChange(modelFields);
            value = result?.courseCode ?? value;
          }
          if (errors.courseCode?.hasError) {
            runValidationTasks("courseCode", value);
          }
          setCourseCode(value);
        }}
        onBlur={() => runValidationTasks("courseCode", courseCode)}
        errorMessage={errors.courseCode?.errorMessage}
        hasError={errors.courseCode?.hasError}
        {...getOverrideProps(overrides, "courseCode")}
      ></TextField>
      <TextField
        label="Requirements met"
        isRequired={false}
        isReadOnly={false}
        value={requirementsMet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              lastName,
              major,
              careerCredits,
              graduationYear,
              courseTitle,
              courseCode,
              requirementsMet: value,
            };
            const result = onChange(modelFields);
            value = result?.requirementsMet ?? value;
          }
          if (errors.requirementsMet?.hasError) {
            runValidationTasks("requirementsMet", value);
          }
          setRequirementsMet(value);
        }}
        onBlur={() => runValidationTasks("requirementsMet", requirementsMet)}
        errorMessage={errors.requirementsMet?.errorMessage}
        hasError={errors.requirementsMet?.hasError}
        {...getOverrideProps(overrides, "requirementsMet")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || studentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || studentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
