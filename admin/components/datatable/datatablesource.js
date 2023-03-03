export const scooters = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "company",
    headerName: "Company",
    width: 100,
  },
  {
    field: "model",
    headerName: "Model",
    width: 200,
  },
  {
    field: "latitude",
    headerName: "Latitude",
    width: 150,
  },
  {
    field: "longitude",
    headerName: "Longitude",
    width: 200,
  },
  {
    field: "battery",
    headerName: "Battery",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="font-semibold text-base">
          {params.row.price} <span className="font-semibold">USD</span>
        </div>
      );
    },
  },
  {
    field: "isRented",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      return (
        <div
          className={
            params.row.isRented == "Rented"
              ? "bg-green-200 p-2 rounded-lg"
              : params.row.isRented == "Not Rented"
              ? "bg-yellow-200 p-2 rounded-lg"
              : "bg-red-400 p-2 rounded-lg"
          }
        >
          {params.row.isRented}
        </div>
      );
    },
  },
];