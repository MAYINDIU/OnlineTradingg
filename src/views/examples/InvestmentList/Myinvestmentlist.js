import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    CardTitle,
    Col,
} from "reactstrap";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "Context/AuthProvider";

const Myinvestmentlist = () => {
    const { user } = useContext(AuthContext);
    const [investmentData, setInvestmentData] = useState(['']);
    // console.log(investmentData)
    const userid = user?.id;

    const duration = (std, ed) => {
        const start = new Date(std);
        const end = new Date(ed);
        const find = end - start;
        const h = Math.floor(find / (1000 * 60 * 60));
        const min = Math.floor((find % (1000 * 60 * 60)) / (1000 * 60));
        // console.log(h+"h "+min+"m");
        const d = (h + "h " + min + "m");
        return d;
    }


    const token = localStorage.getItem('token');

    const investmentApiUrl = `https://indian.munihaelectronics.com/public/api/my_flat_invest/${userid}`;

    // useEffect(() => {
    //   fetchSessionToken();
    // }, []);

    // const fetchSessionToken = async () => {
    //   try {
    //     const response = await fetch(loginApiUrl);
    //     const jsonData = await response.json();
    //     setSessionToken(console.log(jsonData));

    //   } catch (error) {
    //     console.error('Error fetching session token:', error);
    //   }
    // };

    const fetchInvestmentData = async () => {
        try {
            const response = await axios.get(investmentApiUrl);
            setInvestmentData(response.data);
        } catch (error) {
            console.error('Error fetching investment data:', error);
        }
    };
    useEffect(() => {
        fetchInvestmentData();
    }, []);


    return (
        <div>
            <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
                <h2 className='text-white font-weight-bold'>My Investment List</h2>
            </div>

            <Row className="mt--7 mb-3 container-fluid">
                <Col className="mb-5 mb-xl-0" xl="12">
                    <Card className="shadow border-0">

                        <Table className="align-items-center  " hover responsive>
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="text-center" scope="col">SL. No.</th>
                                    <th className="text-center" scope="col">Investment Amount</th>
                                    <th className="text-center" scope="col">Plan Name</th>
                                    <th className="text-center" scope="col">Active Date</th>
                                    <th className="text-center" scope="col">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {investmentData.map((investData, index) => (
                                    <tr>
                                        <th className="text-center" scope="row">{index + 1}</th>
                                        <td className="text-center">INR {investData?.transaction_amount}</td>
                                        <td className="text-center">{investData?.plan_name}</td>
                                        <td className="text-center">{investData?.purchase_date}</td>
                                        <td className="text-center text-success">{investData?.status}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card>
                </Col>


            </Row>
        </div>
    );
};

export default Myinvestmentlist;