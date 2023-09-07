import { AuthContext } from "Context/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Table,
} from "reactstrap";

const TicketHistory = () => {
  const { user } = useContext(AuthContext);

  const id = user?.id;
  const [ticketHistory, setTicketHistory] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  useEffect(() => {
    fetch(
      `https://indian.munihaelectronics.com/public/api/singleSupportlist/${id}`
    )
      .then((res) => res.json())
      .then((data) => setTicketHistory(data));
  }, [id]);
  console.log(ticketHistory);

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredTicketHistory = searchText
    ? ticketHistory.filter((history) =>
        history?.method_type.toLowerCase().includes(searchText.toLowerCase())
      )
    : ticketHistory;

  const sortedTicketHistory =
    sortColumn && sortDirection
      ? [...filteredTicketHistory].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredTicketHistory;

  const columns = [
    {
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
    },

    {
      name: "Token No",
      selector: "token_no",
      sortable: true,
    },
    {
      name: "Description",
      selector: "description",
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <>
          {row?.status === "0" ? (
            <Button className="btn-warning text-white mr-2" size="sm">Pending</Button>
          ) : (
            <Button className=" btn-success text-white mr-2" size="sm">Approved</Button>
          )}
        </>
      ),
      sortable: false,
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
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-2">Ticket History</h2>
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
      <div className="container-fluid  mb-2 mx-auto mt--7 mb-5">
        <Card className="card-stats shadow-lg shadow-sm--hover  mb-4 mb-xl-0 ">
          <Table hover bordered responsive>
            <DataTable
              columns={columns}
              data={sortedTicketHistory}
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

export default TicketHistory;
