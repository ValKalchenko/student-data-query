import { Card, Input, Button, message, Form } from "antd";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Student } from "../../models";
import { Course } from "../../models";
import { StudentCourse } from "../../models";


const DataEntry = () => {
    const [name, setName,] = useState('');
    const [lastName, setLastName] = useState('')
    const [major, setMajor,] = useState('');
    const [careerCredits, setCareerCredits,] = useState('');
    const [graduationYear, setGradYear,] = useState('');
    const [students, setStudents] = useState();
    const [code, setCode] = useState('');
    const [title, setTitle] = useState('');
    const [requirements, setRequirements] = useState('');
    const [course, setCourse] = useState();
    const [studentCourse, setstudentCourse] = useState();


    const onFinish = async () => {
        if (!name){
            message.error('Name required!');
            return;
        }
        if (!lastName){
            message.error('Last Name required!');
            return;
        }
        if (!major){
            message.error('Major required!');
            return;
        }
        if (!careerCredits){
            message.error('Career Credits required!');
            return;
        }
        if (!graduationYear){
            message.error('Graduation Year required!');
            return;
        }
        if (!code){
            message.error('Course Code required!');
            return;
        }
        if (!title){
            message.error('Course Title required!');
            return;
        }
        if (!requirements){
            message.error('Course Requirements required!');
            return;
        }

    };

    const createNewStudent = async () => {
        const newStudent = DataStore.save(new Student({
            name,
            lastName,
            major,
            careerCredits: parseInt(careerCredits),
            graduationYear: parseInt(graduationYear)
        }));

        const course = DataStore.save(new Course({
            code,
            title
        }));

        const studentcourse = DataStore.save(new StudentCourse({
            requirements,
            courseID: course.id,
            studentID: newStudent.id
        }));
        setCourse(course);
        setStudents(newStudent);
        setstudentCourse(studentcourse);
        message.success('New Student Entered');
    };

    return (
        <Card title={'Student Data Entry'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label={'First Name'} required >
                    <Input 
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Last Name'} required >
                    <Input 
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Major'} required >
                    <Input 
                    placeholder="Enter Student Major"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Credits'} required >
                    <Input 
                    placeholder="Enter Career Credits"
                    value={careerCredits}
                    onChange={(e) => setCareerCredits(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Graduation Year'} required >
                    <Input 
                    placeholder="Enter Graduation Year"
                    value={graduationYear}
                    onChange={(e) => setGradYear(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Course Title'} required >
                    <Input 
                    placeholder="Course Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Course Code'} required >
                    <Input 
                    placeholder="Enter Course Code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Course Requirement Met'} required >
                    <Input 
                    placeholder="Enter Course Requirement"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={createNewStudent}>Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}

export default DataEntry;