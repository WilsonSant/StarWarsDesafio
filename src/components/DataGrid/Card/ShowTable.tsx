import React, { useContext } from "react";
import { CardProvider } from "./context/CardContext";
import TableRender from "./TableRender";

function ShowTable() {
  const { showTable } = useContext(CardProvider);
  return showTable ? <TableRender /> : null;
}

export default ShowTable