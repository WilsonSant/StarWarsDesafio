import Image from "next/image";
import React from "react";
import { configFields } from "../../../fable/utils/components/Menu.fs.js";
import { Avatar } from "antd";

function Config(props) {
  const { currentLanguage } = props;
  return (
    <div className="flex flex-row justify-stretch space-x-5 mr-8 cursor-pointer">
      <Avatar src="/settings.svg" alt="Config" />
      <p className={"text-white text-xl"}>{configFields(currentLanguage)}</p>
    </div>
  );
}

export default Config;
