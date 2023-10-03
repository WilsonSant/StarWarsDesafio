import React from "react";
import SelectLanguage from "../Register/SelectLanguage";
import Image from "next/image";
import Config from "./Config";
import { useAtom } from "jotai";
import { languageAtom } from "@/atoms/global";
import Power from "./Power";
import { Row } from "antd";

function Menu() {
  const [currentLanguage] = useAtom(languageAtom);
  return (
    <div className="flex flex-col bg-[#03363D] h-screen align-top p-5 space-y-12">
      <div className="flex justify-center">
        <Image src="/company.svg" width={115} height={35} alt="Company" />
      </div>
      <Row className="flex items-center flex-row justify-center space-y-10">
        <Image
          src="/dashboard.svg"
          width={140}
          height={27}
          alt="Dashboard"
          className="cursor-pointer"
        />
        <Config {...{ currentLanguage }} />
        <Power {...{ currentLanguage }} />
      </Row>
      <div className="flex items-center justify-center">
        <SelectLanguage />
      </div>
    </div>
  );
}

export default Menu;
