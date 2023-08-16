import { AuthContext } from 'Context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, Table } from 'reactstrap';

const UserNotifications = () => {
    const { user } = useContext(AuthContext);
    const [notifications, setNotifications] = useState([]);

    const columns = [
        {
            name: 'Index',
            selector: row => row.id,

        },
        {
            name: 'Text',
            selector: row => row.text,

        },
        {
            name: 'Date',
            selector: row => row.created_at,
        },

    ];
    const customStyles = {
        // rows: {
        //     style: {
        //         minHeight: '72px', // override the row height
        //     },
        // },
        headCells: {
            style: {
                backgroundColor: 'blue',
                color: 'white',
                opacity: 0.5,
                fontSize: 13,
                fontWeight: "bold",
            },
            draggingStyle: {
                cursor: 'move',
            },
        },
    }

    useEffect(() => {
        fetch(`https://indian.munihaelectronics.com/public/api/show_userNotification/${user.id}`)
            .then((res) => res.json())
            .then((data) => setNotifications(data));
    }, []);

    // console.log(notifications)


    return (
        <div>
            <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
                <h2 className="text-white text-center mb-2">All Notifications</h2>
            </div>
            <div className="container-fluid  mb-2 mx-auto mt--7">
                <Card className="shadow-lg  ">
                    <DataTable columns={columns} data={notifications} customStyles={customStyles} pagination />
                </Card>
            </div>
        </div>
    );
};

export default UserNotifications;