import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Table } from "reactstrap";

const Purchaselist = () => {
    const navigate = useNavigate();
  const [allpurchase, allPurchase] = useState([]);
//   console.log(allpurchase);
  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/show_purchase")
      .then((res) => res.json())
      .then((data) => allPurchase(data));
  }, []);

 //******Handle post data in database********
 const handlePurchase = (id) => {

    const ID=id;
    console.log(ID);
    const url = `https://indian.munihaelectronics.com/public/api/updatep/${ID}`;
    fetch(url, {
        method: "GET",
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


  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-2">PURCHASE LIST</h2>
      </div>
      <div className="container-fluid  mb-2 mx-auto mt--7">
      <Card  className="shadow-lg  ">
        <Table hover bordered responsive>
          <thead className="text-white bg-gradient-info">
            <tr className="text-md text-center">
              <th>Sl No</th>
              <th>User ID</th>
              <th>Plan ID</th>
              <th>Purchase Date</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {allpurchase.map((purchase, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
                <td className="text-center">{purchase?.userId}</td>
                <td className="text-center">{purchase?.planId}</td>
                <td className="text-center">{purchase?.purchase_date}</td>
                <td className="text-center">
                  {
                    purchase?.status != "Pending"  ? <Button onClick={() => handlePurchase(purchase?.id)} size="sm" className="btn btn-success border-none">
                    Update
                  </Button> :<Button onClick={() => handlePurchase(purchase?.id)}  size="sm"  className="btn btn-danger h-12 border-none">
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

export default Purchaselist;
