import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "@/components/Header";
import { config } from "@/getToken";
import axios from "axios";

const orders = () => {
  const [scooters, setScooters] = React.useState();

  React.useEffect(() => {
    return async () => {
      try {
        const res = await axios.get("/api/admin/scooters", config);
        setScooters(res.data);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header page="Orders" />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Order</span>
            <span className="hidden md:grid">Customer</span>
            <span className="hidden sm:grid">Scooter</span>
            <span className="sm:text-left text-right">Status</span>
          </div>
          <ul>
            {!scooters ? (
              <div className="flex justify-center items-center bg-white h-[70vh]">
                <p className="text-gray-800 font-bold">
                  No orders yet, please check back later
                </p>
              </div>
            ) : (
              scooters?.map((scooter, id) => (
                <li
                  key={id}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FaShoppingBag className="text-purple-800" />
                    </div>
                    <div className="pl-4">
                      <p className="text-gray-800 font-bold">
                        ${scooter.total.toLocaleString()}
                      </p>
                      <p className="text-gray-800 text-sm">
                        {scooter.name.first}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">
                    <span
                      className={
                        scooter.status == "Processing"
                          ? "bg-green-200 p-2 rounded-lg"
                          : scooter.status == "Completed"
                          ? "bg-blue-200 p-2 rounded-lg"
                          : "bg-yellow-200 p-2 rounded-lg"
                      }
                    >
                      {scooter.status}
                    </span>
                  </p>
                  <p className="hidden md:flex">{scooter.date}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{scooter.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
