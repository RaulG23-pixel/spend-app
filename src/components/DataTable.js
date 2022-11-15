import React from "react";
import "./css/dataTable.css";
function DataTable(props) {
  const { records } = props;
  return (
    <div className="table__container">
      <table className="table">
        <tbody>
          <tr className="table__title">
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
          {records.map((x) => (
            <tr>
              <td>1</td>
              <td>Gas</td>
              <td>5</td>
              <td>2/11/2020</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
