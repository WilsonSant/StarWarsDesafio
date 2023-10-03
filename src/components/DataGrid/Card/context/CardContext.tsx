"use client";
import { createContext, useEffect, useState } from "react";
import {
  createObjectCard,
  createColumns,
} from "../../../../../fable/utils/components/Card.fs.js";
import { getPeople, getPlanets, getShips, getSpecies } from "@/services";
import { useAtom } from "jotai";
import {
  cyanDataAtom,
  languageAtom,
  loadAtom,
  orangeDataAtom,
  purpleDataAtom,
  yellowDataAtom,
} from "@/atoms/global";
import {
  orangeColumns,
  editedColumns,
  purpleColumns,
  yellowColumns,
  cyanColumns,
} from "../utils";
import { translateExpression } from "../../../../../fable/utils/components/Form.fs.js";

export const CardProvider = createContext(null);

function CardContext({ children }) {
  const [currentLanguage] = useAtom(languageAtom);
  const [orangeClicked, setOrangeClicked] = useState(false);
  const [purpleClicked, setPurpleClicked] = useState(false);
  const [speciesClicked, setSpeciesClicked] = useState(false);
  const [shipsClicked, setShipsClicked] = useState(false);

  const [dataTable, setDataTable] = useState([]);
  const [columnsTable, setColumnsTable] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  const [orangeData] = useAtom(orangeDataAtom);
  const [purpleData] = useAtom(purpleDataAtom);
  const [speciesData] = useAtom(yellowDataAtom);
  const [shipsData] = useAtom(cyanDataAtom);

  const orangeDataColumns = createColumns(currentLanguage, [
    ...orangeColumns,
    ...editedColumns,
  ]);
  const purpleDataColumns = createColumns(currentLanguage, [
    ...purpleColumns,
    ...editedColumns,
  ]);
  const yellowDataColumns = createColumns(currentLanguage, [
    ...yellowColumns,
    ...editedColumns,
  ]);

  const cyanDataColumns = createColumns(currentLanguage, cyanColumns);

  function cancelButton() {
    setOrangeClicked(false);
    setPurpleClicked(false);
    setSpeciesClicked(false);
    setShipsClicked(false);
  }

  function handleSetCard(readState, setState, data, columns, title) {
    cancelButton();
    setState(!readState);
    setDataTable(data);
    setModalTitle(title);
    setColumnsTable(columns);
    setShowTable(!readState);
  }

  const orangeObject = createObjectCard(
    translateExpression("Pessoas", "People", currentLanguage),
    orangeData,
    orangeDataColumns,
    "shadow-orange-400",
    "Persons",
    orangeClicked,
    setOrangeClicked,
    "/persons.svg"
  );

  const purpleObject = createObjectCard(
    translateExpression("Planetas", "Planets", currentLanguage),
    purpleData,
    purpleDataColumns,
    "shadow-purple-400",
    "Planets",
    purpleClicked,
    setPurpleClicked,
    "/planets.svg"
  );

  const speciesObject = createObjectCard(
    translateExpression("Espécies", "Species", currentLanguage),
    speciesData,
    yellowDataColumns,
    "shadow-yellow-400",
    "Species",
    speciesClicked,
    setSpeciesClicked,
    "/species.svg"
  );
  const shipsObject = createObjectCard(
    translateExpression("Naves", "Ships", currentLanguage),
    shipsData,
    cyanDataColumns,
    "shadow-cyan-400",
    "Ships",
    shipsClicked,
    setShipsClicked,
    "/ships.svg"
  );

  return (
    <CardProvider.Provider
      value={{
        orangeObject,
        purpleObject,
        speciesObject,
        shipsObject,
        handleSetCard,
        dataTable,
        columnsTable,
        showTable,
        setShowTable,
        modalTitle,
        setModalTitle,
        cancelButton,
        currentLanguage,
      }}
    >
      {children}
    </CardProvider.Provider>
  );
}

export default CardContext;
