import { AuthContext } from 'Context/AuthProvider';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, Table } from 'reactstrap';

const UserNotifications = () => {
    const { user, update, setUpdate } = useContext(AuthContext);
    const [notifications, setNotifications] = useState([]);


    const duration = (std) => {
        const start = new Date(std);
        const end = new Date();
        const find = end - start;
        const h = Math.floor(find / (1000 * 60 * 60));
        const min = Math.floor((find % (1000 * 60 * 60)) / (1000 * 60));
        // console.log(h+"h "+min+"m");
        const d = (h + "h " + min + "m" + ' ago');
        return d;
    }

    useEffect(() => {
        axios.get(`https://indian.munihaelectronics.com/public/api/show_userNotification/${user.id}`)
            .then((response) => {
                setNotifications(response.data);
            });
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
        {
            name: 'Notifications',
            cell: row => <span onClick={() => handleStatusChange(row.id)}>{row.text}</span>,

        },
        {
            name: 'Duration',
            cell: row => <span onClick={() => handleStatusChange(row.id)}>{duration(row.created_at)}</span>,
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
            when: row => row.user_status === 'unread',
            style: {
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