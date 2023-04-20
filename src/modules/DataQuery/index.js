import { useState, useEffect } from 'react';
import { Card, Table, Select, Form, Button } from 'antd';
import { DataStore } from 'aws-amplify';
import { Student } from '../../models';



const DataQuery = () => {

    const [students, setStudents] = useState([]);

    const handleChange = (value) => {
        console.log(`${value}`);
    };

    const queryStudentMajor = async ({major}) => {
        console.log(major);
        const queryMajor = await DataStore.query(Student, (c) => c.major.eq(major));
        setStudents(queryMajor);
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
            <Form layout='inline'style={{ marginTop: 20, }} onFinish={queryStudentMajor}>
                <Form.Item required name='major'>
                    <Select defaultValue="Student Major" style={{ width: 230, padding: 5,}}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'CSIT',
                                label: 'CSIT',
                            },
                            {
                                value: 'CIS',
                                label: 'CIS',
                            },
                            {
                                value: 'Cyber Security',
                                label: 'Cyber Security',
                            },
                            {
                                value: 'Website Design',
                                label: 'Website Design',
                            },
                        ]}
                    />
                    </Form.Item>
                    <Form.Item>
                    <Select defaultValue="Graduation Year" style={{ width: 230, padding: 5,}}
                        onChange={handleChange}
                        options={[
                            {
                                value: '2023',
                                label: '2023',
                            },
                            {
                                value: '2024',
                                label: '2024',
                            },
                            {
                                value: '2025',
                                label: '2025',
                            },
                            {
                                value: '2026',
                                label: '2026',
                            },
                        ]}
                    />
                    </Form.Item>
                    <Form.Item>
                    <Select defaultValue="Course Code" style={{ width: 230, padding: 5,}}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'CSIT230',
                                label: 'CSIT230',
                            },
                            {
                                value: 'CMSC250',
                                label: 'CMSC250',
                            },
                            {
                                value: 'CSIT101',
                                label: 'CSIT101',
                            },
                            {
                                value: 'CMTC301',
                                label: 'CMTC301',
                            },
                        ]}
                    />
                    </Form.Item>
                    <Form.Item>
                    <Select defaultValue="Career Credits" style={{ width: 230, padding: 5, paddingRight: 5,}}
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
                <Form.Item>
                    <Button type='primary' htmlType='submit' style={{ marginTop: 10,}}>Major Data</Button>
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