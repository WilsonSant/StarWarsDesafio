"use client";
import React, { useEffect } from "react";
import Header from "./Header/Main";
import Movies from "./Movies/Main";
import Cards from "./Card/Main";
import { useAtom } from "jotai";
import {
  cyanDataAtom,
  loadAtom,
  orangeDataAtom,
  purpleDataAtom,
  yellowDataAtom,
} from "@/atoms/global";
import { Spin } from "antd";
import { getPeople, getPlanets, getShips, getSpecies } from "@/services";

function DataGrid() {
  const [loading, setLoading] = useAtom(loadAtom);

  const [orangeData, setOrangeData] = useAtom(orangeDataAtom);
  const [purpleData, setPurpleData] = useAtom(purpleDataAtom);
  const [speciesData, setSpeciesData] = useAtom(yellowDataAtom);
  const [shipsData, setShipsData] = useAtom(cyanDataAtom);

  useEffect(() => {
    getPeople(setOrangeData);
    getPlanets(setPurpleData);
    getSpecies(setSpeciesData);
    getShips(setShipsData);
  }, []);

  useEffect(() => {
    const arrayData = [orangeData, purpleData, speciesData, shipsData];
    arrayData.every((data) => data.length > 0) && setLoading(false);
  }, [orangeData, purpleData, speciesData, shipsData]);

  return (
    <div className="flex bg-[#F3F4F8] justify-center  h-screen items-center flex-col space-y-5 w-full">
      {loading ? (
        <Spin size="large" />
      ) : (
        <div className="flex min-h-screen space-y-6 flex-col">
          <Header />
          <Movies />
          <Cards />
        </div>
      )}
    </div>
  );
}

export default DataGrid;
