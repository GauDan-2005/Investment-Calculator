import React from "react";

import "./InvTable.css";

function InvTable({ dataTable }) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((dataItem) => {
          return (
            <tr>
              <td>{dataItem.year}</td>
              <td>{dataItem.savingsEndOfYear}</td>
              <td>{dataItem.yearlyInterest}</td>
              <td>{dataItem.totalInterest}</td>
              <td>{dataItem.totalContribution}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default InvTable;
