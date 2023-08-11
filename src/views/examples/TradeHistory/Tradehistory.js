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

const Tradehistory = () => {

  const [sort, setSort] = useState({ keyToSort: 'openPrice', direction: 'asc' })

  const [sessionToken, setSessionToken] = useState('');
  const [historyData, setHistoryData] = useState(['']);
  const history = historyData;
  // console.log(history);

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



  // Login API parameters
  const email = 'tanmoysom@gmail.com';
  const password = '973257o425@MFXB';
  const loginApiUrl = `https://www.myfxbook.com/api/login.json?email=${email}&password=${password}`;

  // Second API parameters
  const accountId = 10125757;
  const historyApiUrl = `https://www.myfxbook.com/api/get-history.json?session=${sessionToken}&id=${accountId}`;

  useEffect(() => {
    fetchSessionToken();
  }, []);

  const fetchSessionToken = async () => {
    try {
      const response = await fetch(loginApiUrl);
      const jsonData = await response.json();
      setSessionToken(jsonData.session);
    } catch (error) {
      console.error('Error fetching session token:', error);
    }
  };

  const fetchHistoryData = async () => {
    try {
      const response = await axios.get(historyApiUrl);
      setHistoryData(response.data?.history);
    } catch (error) {
      console.error('Error fetching history data:', error);
    }
  };

  fetchHistoryData();

  const handelHeaderClick = (kTs) => {
    setSort({
      keyToSort: kTs,
      direction: kTs === sort.keyToSort ? sort.direction === 'asc' ? 'desc' : 'asc' : 'desc',
    })

  };
  const getSortedArray = (arrayToSort) => {
    if (sort.direction === 'asc') {
      return arrayToSort.sort((a, b) => (a[sort.keyToSort] > (b[sort.keyToSort]) ? 1 : -1));
    }
    return arrayToSort.sort((a, b) => (a[sort.keyToSort] > (b[sort.keyToSort]) ? -1 : 1));

  };

  return (

    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className='text-white font-weight-bold'>Recent Trade History</h2>
      </div>

      <Row className="mt--7 mb-3 container-fluid">
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="shadow border-0">

            <Table className="align-items-center  " hover responsive>
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col">SL. No.</th>
                  <th scope="col">Open Date</th>
                  <th scope="col">Close Date</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Action</th>
                  <th scope="col">Lots</th>
                  <th scope="col" onClick={() => handelHeaderClick('openPrice')}>Open Price</th>
                  <th scope="col" onClick={() => handelHeaderClick('closePrice')}>Close Price </th>
                  <th scope="col" onClick={() => handelHeaderClick('pips')}>Pips </th>
                  <th scope="col" onClick={() => handelHeaderClick('profit')}>Net Profit</th>
                  <th scope="col">Duration</th>
                  {/* <th scope="col">Draw Down</th> */}
                </tr>
              </thead>
              <tbody>
                {getSortedArray(history).map((historyData, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td >{historyData?.openTime}</td>
                    <td >{historyData?.closeTime}</td>
                    <td className="text-center">{historyData?.symbol}</td>
                    <td className="text-center">{historyData?.action}</td>
                    <td className="text-center">{historyData?.sizing?.value}</td>
                    <td className="text-center">{historyData?.openPrice}</td>
                    <td className="text-center">{historyData?.closePrice}</td>
                    <td className="text-center">{historyData?.pips}</td>
                    <td className="text-center">{historyData?.profit}</td>
                    <td className="text-center">{duration(historyData?.openTime, historyData?.closeTime)}</td>
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

export default Tradehistory;