import { Card, Input, Button, message, Form} from "antd";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Student } from "../../models";


const DataEntry = () => {
    const [firstName, setName,] = useState('');
    const [lastname, setLastName] = useState('')
    const [major, setMajor,] = useState('');
    const [credits, setCareerCredits,] = useState();
    const [gradyear, setGradYear,] = useState();
    const [students, setStudents] = useState();

    useEffect(() => {
        setName(Student.firstName);
        setLastName(Student.lastname);
        setMajor(Student.major);
        setCareerCredits(Student.credits);
        setGradYear(Student.gradyear);
    });

    const onFinish = async () => {
        if (!firstName){
            message.error('Name required!');
            return;
        }
        if (!lastname){
            message.error('Last Name required!');
            return;
        }
        if (!major){
            message.error('Major required!');
            return;
        }
        if (!credits){
            message.error('Career Credits required!');
            return;
        }
        if (!gradyear){
            message.error('Graduation Year required!');
            return;
        }

    };

    const createNewStudent = async () => {
        const newStudent = DataStore.save(new Student({
            firstName,
            lastname,
            major,
            credits,
            gradyear
        }));
        setStudents(newStudent);
        message.success('New Student Entered');
    };

    return (
        <Card title={'Student Data Entry'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label={'First Name'} required >
                    <Input 
                    placeholder="Enter Name"
                    value={firstName}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Last Name'} required >
                    <Input 
                    placeholder="Enter Last Name"
                    value={lastname}
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
                    value={credits}
                    onChange={(e) => setCareerCredits(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Graduation Year'} required >
                    <Input 
                    placeholder="Enter Graduation Year"
                    value={gradyear}
                    onChange={(e) => setGradYear(e.target.value)}
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