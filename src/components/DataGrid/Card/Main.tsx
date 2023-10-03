import React from "react";
import CardContext from "./context/CardContext";
import CardsRender from "./CardsRender";
import ShowTable from "./ShowTable";

function Cards() {
  return (
    <CardContext>
      <div className="flex flex-col space-y-12 ">
        <CardsRender />
        <ShowTable />
      </div>
    </CardContext>
  );
}

export default Cards;
