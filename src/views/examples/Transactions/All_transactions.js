import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Table } from "reactstrap";

const All_transactions = () => {
    const navigate = useNavigate();
  const [alltransactions, setallTransaction] = useState([]);
//   console.log(allpurchase);
  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/show_transaction")
      .then((res) => res.json())
      .then((data) => setallTransaction(data));
  }, []);

 //***Handle post data in database***
 const handleUpdate = (id) => {
  const confirm = window.confirm("Are You Sure?");
    if(confirm){

  
    const ID=id;
    console.log(ID);
    const url = `https://indian.munihaelectronics.com/public/api/update_depositstatus/${ID}`;
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
    })
        .then(res => res.json())
        .then(data=>console.log(data));
        // .then(result => {

        //     if (result.status = true) {

        //         toast(`${NAME} Successfully Saved Your Application`);
        //     }
        //     else {
        //         toast.error(`${NAME} Don,t Saved Your Application`)
        //     }

        //     console.log(result);
            // event.target.reset()

            // Navigate('/purchaselist');
        // })
      }
}


  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-2">TRANSACTIONS LIST</h2>
      </div>
      <div className="container-fluid  mb-2 mx-auto mt--7">
      <Card  className="shadow-lg  ">
        <Table hover bordered responsive>
          <thead className="text-white bg-gradient-info">
            <tr className="text-md text-center">
              <th>Sl No</th>
              <th>User ID</th>
              <th>Amount</th>
              <th>TNX Type</th>
              <th>Method Type</th>
              <th>Description</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {alltransactions.map((transactions, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
            <td className="text-center">{transactions?.userid}</td>
                <td className="text-center">{transactions?.amount}</td>
                <td className="text-center">{transactions?.tnx_type}</td>
                <td className="text-center">{transactions?.method_type}</td>
                <td className="text-center">{transactions?.description}</td>
                {/* <td className="text-center">{transactions?.status}</td> */}
                <td className="text-center">
                  {
                    transactions?.status != "0"  ? <Button onClick={() => handleUpdate(transactions?.id)}  size="sm" className="btn w-75 btn-success border-none">
                     Approved
                  </Button> :<Button onClick={() => handleUpdate(transactions?.id)}    size="sm"  className="btn w-75 btn-danger h-12 border-none">
                  Pending
                 </Button>
    
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Card>
      </div>
    </div>
  );
};

export default All_transactions;