import { AuthContext } from 'Context/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Table } from 'reactstrap';




const DepositHistory = () => {
  const { user } = useContext(AuthContext)

  const id = user?.id
  const [depositHistory, setDepositHistory] = useState([])

  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/show_usertransaction/${id}`)
      .then((res) => res.json())
      .then((data) => setDepositHistory(data));
  }, [id]);
  console.log(depositHistory)

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
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
    },

    {
      name: "Amount",
      selector: "amount",
      sortable: true,
    },
    {
      name: "Transiction Type",
      selector: "tnx_type",
      sortable: true,
    },
    {
      name: "Method Type",
      selector: "method_type",
      sortable: true,
    },
    {
      name: "Description",
      selector: "description",
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
      <Form className="navbar-search navbar-search-dark form-inline d-md-flex justify-content-end ml-lg-auto mb-3">
        <FormGroup className="mb-0">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fas fa-search" />
              </InputGroupText>
            </InputGroupAddon>
            <Input onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search" type="text" />
          </InputGroup>
        </FormGroup>
      </Form>
      <Card className="card-stats shadow-lg shadow-sm--hover  mb-4 mb-xl-0 ">

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
  );
};

export default DepositHistory;