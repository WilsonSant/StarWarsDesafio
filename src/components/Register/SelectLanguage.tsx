"use client"

import React, { useEffect } from "react";
import { Avatar } from "antd";
import { useAtom } from "jotai";
import { languageAtom } from "@/atoms/global";
import {
  changeIcon,
  changeLanguage,
} from "../../../fable/utils/Internationalization.fs.js";

function SelectLanguage() {
  const [currentLanguage, setCurrentLanguage] = useAtom(languageAtom);
  const icon = changeIcon(currentLanguage);

  return (
    <Avatar
      className="cursor-pointer"
      size="large"
      shape="square"
      src={icon}
      onClick={(e) => setCurrentLanguage(changeLanguage(currentLanguage))}
    />
  );
}

export default SelectLanguage;
