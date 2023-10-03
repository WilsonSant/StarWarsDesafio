import React, { useContext } from "react";
import CustomCard from "./CustomCard";
import { CardProvider } from "./context/CardContext";

function CardsRender() {
  const {
    orangeObject,
    purpleObject,
    speciesObject,
    shipsObject,
    handleSetCard,
  } = useContext(CardProvider);
  return (
    <div className="flex flex-row space-x-5 justify-between">
      <CustomCard object={orangeObject} handleClick={handleSetCard} />
      <CustomCard object={purpleObject} handleClick={handleSetCard} />
      <CustomCard object={speciesObject} handleClick={handleSetCard} />
      <CustomCard object={shipsObject} handleClick={handleSetCard} />
    </div>
  );
}

export default CardsRender;
