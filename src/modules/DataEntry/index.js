import { Card, Input, Button, message, Form } from "antd";
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { Student } from "../../models";




const DataEntry = () => {
    const [name, setName,] = useState('');
    const [lastName, setLastName] = useState('')
    const [major, setMajor,] = useState('');
    const [careerCredits, setCareerCredits,] = useState('');
    const [graduationYear, setGradYear,] = useState('');
    const [students, setStudents] = useState();
    const [courseCode, setCode] = useState('');
    const [requirementsMet, setRequirements] = useState('');
    const [courseTitle, setTitle] = useState('');
    


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

        const newStudent = await DataStore.save(new Student({
            name,
            lastName,
            major,
            careerCredits: parseInt(careerCredits),
            graduationYear: parseInt(graduationYear),
            courseCode,
            courseTitle,
            requirementsMet
        }));
        
        setStudents(newStudent);
        message.success('New Student Entered');

    };


    return (
        <Card title={'Student Data Entry'} style={styles.page}>
            <Form layout="vertical">
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
                <Form.Item label={'Course Title'} >
                    <Input 
                    placeholder="Course Title"
                    value={courseTitle}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Course Code'} >
                    <Input 
                    placeholder="Enter Course Code"
                    value={courseCode}
                    onChange={(e) => setCode(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Course Requirement Met' } >
                    <Input 
                    placeholder="Enter Course Requirement"
                    value={requirementsMet}
                    onChange={(e) => setRequirements(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={onFinish}>Submit</Button>
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