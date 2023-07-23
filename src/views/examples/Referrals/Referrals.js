import React from "react";
import { FormGroup, Input, Label, Table } from "reactstrap";

const Referrals = () => {
  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white mb-4">Refer User</h2>
        <div className="text-center">
          {/* <h3 className="text-gray-dark"></h3> */}
          <FormGroup className="container mx-auto " style={{ width: "30%" }}>
            <Label for="exampleText" className="text-gray-dark">
              You can share this link
            </Label>
            <Input
              className="bg-light text-center flex align-items-center"
              style={{ height: "40px" }}
              bsSize="sm"
              id="exampleText"
              name="text"
              type="textarea"
              value="darktech@gmail.com"
              disabled
            />
          </FormGroup>
        </div>
      </div>
      <div className="container mx-auto">
        <Table hover>
          <thead>
            <tr className="text-md">
              <th>Sl No</th>
              <th>Client Name</th>
              <th>Raferal Level</th>
              <th>Parent</th>
              <th>Client Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Anirban</td>
              <td>Direct Referal</td>
              <td>Tester</td>
              <td>
                <button className="btn btn-success border-none">Active</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Srijit</td>
              <td>Direct Referal</td>
              <td>Tester</td>
              <td>
                <button className="btn btn-success border-none">Active</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Anupam</td>
              <td>Direct Referal</td>
              <td>Tester</td>
              <td>
                <button className="btn btn-danger border-none">Disable</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Referrals;
