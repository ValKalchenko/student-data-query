import { useState, useEffect } from 'react';
import { Card, Table, Select, Form, Button } from 'antd';
import { DataStore } from 'aws-amplify';
import { Student } from '../../models';



const DataQuery = () => {

    const [students, setStudents] = useState([]);
    const [major, setmajor] = useState([]);
    const [graduationYear, setgraduationYear] = useState([]);
    const [courseCode, setcourseCode] = useState([]);

    useEffect(() => {
        DataStore.query(Student).then(setmajor);
    }, []);

    useEffect(() => {
        DataStore.query(Student).then(setgraduationYear);
    }, []);

    useEffect(() => {
        DataStore.query(Student).then(setcourseCode);
    }, []);
    

    var arr1 = [];
    var arr3 = [];
    var arr4 = [];

    for (let i=0; i< major.length; i++){
        arr1.push(major[i].major)
    }
    var uniqueMajor = [...new Set(arr1)]

    for (let i=0; i< graduationYear.length; i++){
        arr3.push(graduationYear[i].graduationYear)
    }
    var uniqueYear = [...new Set(arr3)]

    for (let i=0; i< courseCode.length; i++){
        arr4.push(courseCode[i].courseCode)
    }
    var uniqueCode = [...new Set(arr4)]
    

    const { Option } = Select;

    const handleChange = (value) => {
        console.log(`${value}`);
    };

    const queryStudentMajor = async ({ major }) => {
        console.log(major);
        const queryMajor = await DataStore.query(Student, (c) => c.major.eq(major));
        setStudents(queryMajor);
    }

    const queryGradYear = async ({ graduationYear }) => {
        console.log(graduationYear);
        const queryYear = await DataStore.query(Student, (c) => c.graduationYear.eq(graduationYear));
        setStudents(queryYear);
    }

    const queryCourseCode = async ({ courseCode }) => {
        console.log(courseCode);
        const queryCode = await DataStore.query(Student, (c) => c.courseCode.eq(courseCode));
        setStudents(queryCode);
    }

    const queryCareerCredits = async ({ careerCredits }) => {
        if (careerCredits >= 115){
            const queryGreaterCredits = await DataStore.query(Student, (c) => c.careerCredits.ge(careerCredits));
            setStudents(queryGreaterCredits);
        } else {
            const queryLesserCredits = await DataStore.query(Student, (c) => c.careerCredits.lt(careerCredits));
            setStudents(queryLesserCredits);
        }
    }


    const tableColumns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'First Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',

        },
        {
            title: 'Major',
            dataIndex: 'major',
            key: 'major',

        },
        {
            title: 'Career Credits',
            dataIndex: 'careerCredits',
            key: 'careerCredits',

        },
        {
            title: 'Graduation Year',
            dataIndex: 'graduationYear',
            key: 'graduationYear',

        },
        {
            title: 'Course Title',
            dataIndex: 'courseTitle',
            key: 'courseTitle',

        },
        {
            title: 'Course Code',
            dataIndex: 'courseCode',
            key: 'courseCode',

        },
        {
            title: 'Requirements Met',
            dataIndex: 'requirementsMet',
            key: 'requirementsMet',

        },
    ];

    return (
        <Card title='Student Data Query' style={styles.page}>
            <Table
                dataSource={students}
                columns={tableColumns}
                rowKey='id'
            />
            <Form layout='inline' style={{ marginTop: 20, }} onFinish={queryStudentMajor}>
                <Form.Item required name='major'>
                    <Select defaultValue="Student Major" style={{ width: 230, padding: 5, }}>
                    {uniqueMajor.map((uniqueMajor) => {
                          return <Option value={uniqueMajor} key={uniqueMajor}>{uniqueMajor}</Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' style={{ marginTop: 5, }}>Submit</Button>
                </Form.Item>
            </Form>
            <Form layout='inline' style={{ marginTop: 20, }} onFinish={queryGradYear}>
                <Form.Item required name='graduationYear'>
                    <Select defaultValue="Graduation Year" style={{ width: 230, padding: 5, }}>
                    {uniqueYear.map((uniqueYear) => {
                          return <Option value={uniqueYear} key={uniqueYear}>{uniqueYear}</Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' style={{ marginTop: 5, }}>Submit</Button>
                </Form.Item>
            </Form>
            <Form layout='inline' style={{ marginTop: 20, }} onFinish={queryCourseCode}>
                <Form.Item required name='courseCode'>
                    <Select defaultValue="Course Code" style={{ width: 230, padding: 5, }}>
                    {uniqueCode.map((uniqueCode) => {
                          return <Option value={uniqueCode} key={uniqueCode}>{uniqueCode}</Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' style={{ marginTop: 5, }}>Submit</Button>
                </Form.Item>
            </Form>
            <Form layout='inline' style={{ marginTop: 20, }} onFinish={queryCareerCredits}>
                <Form.Item required name='careerCredits'>
                    <Select defaultValue="Career Credits" style={{ width: 230, padding: 5, paddingRight: 5, }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 115,
                                label: 'credits >= 115',
                            },
                            {
                                value: 114,
                                label: 'credits < 115',
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item >
                    <Button type='primary' htmlType='submit' style={{ marginTop: 5, }}>Submit</Button>
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


export default DataQuery;