import { AuthContext } from 'Context/AuthProvider';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, Table } from 'reactstrap';

const UserNotifications = () => {
    const { user, update, setUpdate } = useContext(AuthContext);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetch(`https://indian.munihaelectronics.com/public/api/show_userNotification/${user.id}`)
            .then((res) => res.json())
            .then((data) => setNotifications(data));
    }, [update]);

    const handleStatusChange = async (id) => {
        try {
            const response = await axios.post(`https://indian.munihaelectronics.com/public/api/update_notificationstatus/${id}`, {
                // user_status: 'read'
            });
            console.log(response.data);
            setUpdate(!update)
        } catch (error) {
            console.error(error);
        }

    }

    const columns = [
        // {
        //     name: 'Index',
        //     selector: row => row.id,

        // },
        {
            name: 'Notifications',
            cell: row => <span onClick={() => handleStatusChange(row.id)}>{row.text}</span>,

        },
        {
            name: 'Date',
            selector: row => row.created_at,
        },
        {
            name: 'Status',
            selector: row => row.user_status,
        },

    ];
    const customStyles = {
        rows: {
            style: {
                cursor: 'pointer',
            },
        },
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
    const conditionalRowStyles = [
        {
            when: row => row.user_status == 'unread',
            style: {
                // backgroundColor: 'gray-100',
                // opacity: 0.2,
                fontWeight: "bold",
            },
        },
    ];



    console.log(notifications)


    return (
        <div>
            <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
                <h2 className="text-white text-center mb-2">All Notifications</h2>
            </div>
            <div className="container-fluid  mb-2 mx-auto mt--7">
                <Card className="shadow-lg  ">
                    <DataTable columns={columns}
                        data={notifications}
                        customStyles={customStyles}
                        pagination
                        highlightOnHover
                        conditionalRowStyles={conditionalRowStyles}
                    />

                </Card>
            </div>
        </div>
    );
};

export default UserNotifications;