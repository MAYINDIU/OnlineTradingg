import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, Col, Row, Table } from "reactstrap";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(packages)

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      const url = `https://indian.munihaelectronics.com/public/api/delete-pkg/${id}`
      fetch(url,{
        method:'DELETE'
      })
      .then(res=>res.json())
        const remaining = packages.filter(p=> p.id !== id)
        setPackages(remaining)

      toast.success("Delete Successfull!!");
     
    }
  };

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-2 ">All PACKAGES</h2>
      </div>
      <div className=" mx-auto mt--7 container-fluid mb-4">       
      <Card className="shadow-lg">
        <Table hover bordered responsive>
          <thead>
            <tr className="text-lg text-white bg-gradient-info">
              <th>Sl No</th>
              <th>Plan Name</th>
              <th>Plan Type</th>
              <th>Profit Share</th>
              <th>Min & Max Value</th>
              <th>Settelement Time</th>
              <th>Lockin Period</th>
              <th>Compound Level</th>
              <th>Available</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
                <td>{pkg?.planName}</td>
                <td>{pkg?.planType}</td>
                <td>{pkg?.planType} Profit {pkg?.profitShare}%</td>
                <td>${pkg?.min}-${pkg?.max}</td>
                <td>{pkg?.settelementTime}</td>
                <td>{pkg?.locking_no} {pkg?.lockinPeriod}</td>
                <td>{pkg?.compoundLevel}</td>
                <td>{pkg?.available}</td>
                <td>{pkg?.short_desc}</td>
                <td className="flex ">
               <Link to={`/admin/updatepackages/${pkg?.id}`}>
               <i 
                className="fa-solid fa-pen-to-square text-info mr-2"
                style={{ width: "30px", fontSize: "23px" }}
                >
                </i>
               </Link>
                <i 
                onClick={() => handleDelete(pkg?.id)}
                className="fa-solid fa-trash text-danger" 
                style={{ width: "30px", fontSize: "23px" }}
                >

                </i>
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

export default PackageList;
