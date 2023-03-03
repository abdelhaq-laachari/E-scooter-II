import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "@/components/Header";
import { config } from "@/getToken";
import Datatable from "@/components/datatable/Datatable";
import { data } from "@/data/data";
import axios from "axios";

const scooters = () => {
  const [scooters, setScooters] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    return async () => {
      try {
        const res = await axios.get("/api/admin/scooters", config);
        setScooters(res.data);
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  useEffect(() => {
    // return {
    function handleClickOutside(event) {
      const form = document.getElementById("form");
      if (form && !form.contains(event.target)) {
        setShowForm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header page="Scooters" />
      <div className="pt-6 px-5">
        <button
          onClick={() => {
            setShowForm(true);
          }}
          className="bg-purple-600 text-white px-3 py-2 rounded-lg"
        >
          Add Scooter
        </button>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%]">
            <form id="form">
              <div class="grid gap-6 mb-6 md:grid-cols-2 py-5">
                <div>
                  <label
                    for="latitude"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Latitude
                  </label>
                  <input
                    type="text"
                    id="latitude"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="32.293605782650346"
                    required
                  />
                </div>
                <div>
                  <label
                    for="longitude"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Longitude
                  </label>
                  <input
                    type="text"
                    id="longitude"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=", -9.236224067765122"
                    required
                  />
                </div>
                <div>
                  <label
                    for="company"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Xiaomi"
                    required
                  />
                </div>
                <div>
                  <label
                    for="model"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Model
                  </label>
                  <input
                    type="text"
                    id="model"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="S9plus"
                    required
                  />
                </div>
                <div>
                  <label
                    for="price"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="199 DH"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="p-4">
        {/* <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Id</span>
            <span className="sm:text-left text-right">Latitude</span>
            <span className="hidden md:grid">Longitude</span>
            <span className="hidden sm:grid">Company</span>
            <span className="hidden sm:grid">Model</span>
            <span className="hidden sm:grid">Battery</span>
            <span className="hidden sm:grid">Price</span>
            <span className="hidden sm:grid">Status</span>
          </div>
          <ul>
            {!scooters ? (
              <div className="flex justify-center items-center bg-white h-[70vh]">
                <p className="text-gray-800 font-bold">No Scooters available</p>
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
        </div> */}
        {!scooters ? (
          <div className="flex justify-center items-center h-[70vh]">
            <p className="text-gray-800 font-bold">No Scooters available</p>
          </div>
        ) : (
          <Datatable data={scooters} title="All Scooters" />
        )}
      </div>
    </div>
  );
};

export default scooters;
