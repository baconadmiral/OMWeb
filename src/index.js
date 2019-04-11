import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./MyHeader.js";
import MyFooter from "./MyFooter.js";
import MyDataTable from "./MyDataTable.js";
import orgList from "./orgList.json";
import orgHeaders from "./orgHeaders.json";

import "./styles.css";

function App() {
  return (
    <>
      <MyHeader />

      <MyDataTable data={orgList} columnNames={orgHeaders} />
      <MyFooter />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
