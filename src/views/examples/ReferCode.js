import { AuthContext } from "Context/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import DataTable from "react-data-table-component";
import {
  Card,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Table,
} from "reactstrap";

const ReferCode = () => {
  const { user } = useContext(AuthContext);

  const id = user?.id;
  const [depositHistory, setDepositHistory] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/reff_info/${id}`)
      .then((res) => res.json())
      .then((data) => setDepositHistory(data));
  }, [id]);
  console.log(depositHistory);

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredDepositHistory = searchText
    ? depositHistory.filter((history) =>
        history?.method_type.toLowerCase().includes(searchText.toLowerCase())
      )
    : depositHistory;

  const sortedDepositHistory =
    sortColumn && sortDirection
      ? [...filteredDepositHistory].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredDepositHistory;

  const columns = [
    {
      name: "Parent Name",
      selector: "parent_id",
      sortable: true,
    },

    {
      name: "Client Name",
      selector: "user_id",
      sortable: true,
    },
    {
      name: "Refer Level",
      selector: "ref_level",
      sortable: true,
    },
    {
      name: "Client Status",
      selector: "status",
      sortable: true,
    },
    {
      name: "Date Registered",
      selector: "created_at",
      sortable: true,
    },
  ];

  const sortIconStyles = {
    base: "mr-1",
    sortNone: "hidden",
    sortAsc: "text-green-500",
    sortDesc: "text-red-500",
  };

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8 flex items-center">
        <div className="container mx-auto text-center">
          <Col lg="12" xl="6" className="mx-auto mt-3">
            <FormGroup>
              <Label className="text-white">
                You can share your referal code by this link:
              </Label>
              <InputGroup className="input-group-alternative">
                <Input
                  //   onChange={(e) => setCompoundLevel(e.target.value)}
                  value={`http://localhost:3000/auth/register/${user?.refer_code}`}
                  type="text"
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <CopyToClipboard
                      text={`http://localhost:3000/auth/register/${user?.refer_code}`}
                    >
                      <i class="fa-solid text-info fa-copy cursor" style={{fontSize:'23px', cursor:'pointer'}} title="copied"></i>
                    </CopyToClipboard>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <span className="text-white">or Your referal ID</span> <br></br>
            <span className="text-yellow text-xl">{user?.refer_code}</span>
          </Col>
        </div>
        <Form className="navbar-search navbar-search-dark form-inline d-md-flex justify-content-end ml-lg-auto mb-3">
          <FormGroup className="mb-0">
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
                type="text"
              />
            </InputGroup>
          </FormGroup>
        </Form>
      </div>

      <div className="container-fluid">
        <Card className="card-stats shadow-lg shadow-sm--hover mt--7  mb-xl-0 ">
          <Table hover bordered responsive>
            <DataTable
              columns={columns}
              data={sortedDepositHistory}
              pagination
              highlightOnHover
              sortServer
              fixedHeader
              // responsive
              sortIconStyles={sortIconStyles}
              onSort={handleSort}
            />
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default ReferCode;
