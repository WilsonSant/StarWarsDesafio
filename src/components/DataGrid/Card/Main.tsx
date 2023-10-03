import React from "react";
import CardContext from "./context/CardContext";
import CardsRender from "./CardsRender";
import TableRender from "./TableRender";

function Cards() {
  return (
    <CardContext>
      <div className="flex flex-col space-y-12 ">
        <CardsRender />
        <TableRender />
      </div>
    </CardContext>
  );
}

export default Cards;
