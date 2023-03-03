import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { scooters } from "./datatablesource";
import { useRouter } from 'next/router'
import Styles from "./datatable.module.css";

const Datatable = ({ data, title }) => {
  // const path = window.location.pathname.split("/")[2];
  const router = useRouter()
  const path = router.pathname.split("/")[2];

  // add switch statement to handle different paths
  // const switchFunction = () => {
  //   switch (path) {
  //     case "transaction":
  //       return scooters.concat();
  //     case "payments":
  //       return paymentColumns.concat();
  //     default:
  //   }
  // };

  return (
    <div className={Styles.datatable}>
      <div className={Styles.title}>
        <div className={Styles.datatableTitle}>{title}</div>
      </div>
      <DataGrid
        className={Styles.datagrid}
        getRowId={(row) => row._id}
        rows={data}
        columns={scooters}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
