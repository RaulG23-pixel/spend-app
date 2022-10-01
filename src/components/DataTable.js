import React from "react";
import "./css/dataTable.css";
function DataTable(props) {
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
          <tr>
            <td>1</td>
            <td>Gas</td>
            <td>5</td>
            <td>2/11/2020</td>
          </tr>
          <tr className="table__row_background">
            <td>2</td>
            <td>Gas</td>
            <td>5</td>
            <td>5/3/2020</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gas</td>
            <td>5</td>
            <td>4/1/2021</td>
          </tr>
          <tr className="table__row_background">
            <td>4</td>
            <td>Gas</td>
            <td>5</td>
            <td>9/20/2021</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Gas</td>
            <td>5</td>
            <td>4/1/2021</td>
          </tr>
          <tr className="table__row_background">
            <td>6</td>
            <td>Gas</td>
            <td>5</td>
            <td>9/20/2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
