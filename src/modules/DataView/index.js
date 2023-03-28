import { useState, useEffect } from 'react';
import { Card, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Student } from '../../models';



const DataView = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        DataStore.query(Student).then(setStudents);
    }, []);

    const navigate = useNavigate();

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
    ];



    return (
        <Card title='Student Data' style={styles.page}>
            <Table 
                dataSource={students}
                columns={tableColumns}
                rowKey='id'
                onRow={(student) => ({
                    onClick: () => navigate(`student/${student.id}`)
                })}
            />
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}

export default DataView;