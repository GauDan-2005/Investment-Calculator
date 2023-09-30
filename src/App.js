import React, { useState } from "react";

import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import InvForm from "./components/inputForm/InvForm";
import InvTable from "./components/invTable/InvTable";

import Styles from "./App.module.css";

function App() {
  const [dataTable, setDataTable] = useState([]);

  function TableMaker(dataItem) {
    setDataTable(dataItem);
  }

  return (
    <div className={Styles.main}>
      <Header />
      <InvForm getData={TableMaker} />
      {dataTable.length === 0 ? (
        <p className={Styles.fallback}>There is No Data Available.</p>
      ) : (
        <InvTable dataTable={dataTable} />
      )}
      <Footer />
    </div>
  );
}

export default App;
