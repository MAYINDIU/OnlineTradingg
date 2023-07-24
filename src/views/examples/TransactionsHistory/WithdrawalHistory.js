import React from 'react';

import { Button, ButtonGroup, Card, CardBody, Input, Label, Table } from 'reactstrap';

const WithdrawalHistory = () => {
    return (
        <Card className="card-stats shadow-lg shadow-sm--hover  mb-4 mb-xl-0 ">
            <CardBody className=' d-flex justify-content-between'>
                <div className='d-flex align-items-center'>

                    <Label className='mr-2'>
                        Show
                    </Label>
                    <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                    >
                        <option>
                            10
                        </option>
                        <option>
                            25
                        </option>
                        <option>
                            50
                        </option>
                        <option>
                            100
                        </option>
                    </Input>
                    <Label className=' ml-2'>
                        entries
                    </Label>
                </div>

                <div className='d-flex align-items-center'>
                    <Label className=' mr-2'>
                        Search
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="text"
                    />
                </div>

            </CardBody>

            <Table hover>
                <thead>
                    <tr>
                        <th>
                            Amount Requested
                        </th>
                        <th>
                            Amount + Charge
                        </th>
                        <th>
                            Reaciving Mode
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Date Created
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            Jacob
                        </td>
                        <td>
                            Thornton
                        </td>
                        <td>
                            Thornton
                        </td>
                        <td>
                            @fat
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            Jacob
                        </td>
                        <td>
                            Thornton
                        </td>
                        <td>
                            Thornton
                        </td>
                        <td>
                            @fat
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            3
                        </th>
                        <td>
                            Larry
                        </td>
                        <td>
                            the Bird
                        </td>
                        <td>
                            the Bird
                        </td>
                        <td>
                            @twitter
                        </td>
                    </tr>
                </tbody>
            </Table>


            <CardBody className=' d-flex justify-content-between align-items-center'>

                <Label >
                    Showing 0 to 0 of 0 entries
                </Label>


                <ButtonGroup>
                    <Button outline>
                        Previous
                    </Button>
                    <Button outline>
                        Next
                    </Button>
                </ButtonGroup>

            </CardBody>
        </Card>
    );
};

export default WithdrawalHistory;