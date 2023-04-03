import { Card, Input, Button, message, Form, Popconfirm } from "antd";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Student } from '../../models';


const DetailedData = () => {

    const { id } = useParams();

    const [student, setStudent] = useState();
    const [name, setName,] = useState('');
    const [lastName, setLastName] = useState('')
    const [major, setMajor,] = useState('');
    const [careerCredits, setCareerCredits,] = useState(0);
    const [graduationYear, setGradYear,] = useState(0);

    

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Student, id).then(setStudent);

    }, [id]);

    useEffect(() => {
        if (!student) {
            return;
        }
        setName(student.name);
        setLastName(student.lastName);
        setMajor(student.major);
        setCareerCredits(student.careerCredits);
        setGradYear(student.graduationYear);
    }, [student]);

    const deleteData = async () => {
        DataStore.delete(Student, id).then(setStudent);
        message.success('Student has been deleted.');
    };


    const updateStudentDetails = async () => {
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

        const updateStudent = await DataStore.save(
                Student.copyOf(student, (updated) => {
                    updated.name = name;
                    updated.lastName = lastName;
                    updated.careerCredits = parseInt(careerCredits);
                    updated.graduationYear = parseInt(graduationYear);
                    updated.major = major;
                })
            );
            setStudent(updateStudent);
            message.success('Student data updated!');
        };

    

    return (
        <Card title={`Update Student:`} style={styles.page}>
            <Form layout="vertical">
                <Form.Item label={'First Name'} required >
                    <Input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Last Name'} required >
                    <Input 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Major'} required >
                    <Input 
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Credits'} required >
                    <Input 
                    value={careerCredits}
                    onChange={(e) => setCareerCredits(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Graduation Year'} required >
                    <Input 
                    value={graduationYear}
                    onChange={(e) => setGradYear(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={updateStudentDetails}>Update</Button>
                </Form.Item>
                <Form.Item>
                <Popconfirm
                    placement="topLeft"
                    title={'Are you sure you want to delete this student?'}
                    onConfirm={deleteData}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="primary" danger htmlType="submit">Delete</Button>
                </Popconfirm>
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


export default DetailedData;