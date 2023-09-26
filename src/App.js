import React, { useState } from "react";

import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import InvForm from "./components/inputForm/InvForm";
import InvTable from "./components/invTable/InvTable";

function App() {
  const [dataTable, setDataTable] = useState([]);

  function TableMaker(dataItem) {
    setDataTable(dataItem);
  }

  return (
    <div>
      <Header />
      <InvForm getData={TableMaker} />
      {dataTable.length === 0 ? (
        <p className="fallback">There is No Data Available.</p>
      ) : (
        <InvTable dataTable={dataTable} />
      )}
      <Footer />
    </div>
  );
}

export default App;
