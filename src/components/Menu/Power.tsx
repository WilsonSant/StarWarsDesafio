import React from "react";
import Image from "next/image";
import { powerFields } from "../../../fable/utils/components/Menu.fs.js";
import { Avatar } from "antd";
import { useRouter } from "next/navigation.js";

function Power(props) {
  const { currentLanguage } = props;
  const router = useRouter();
  return (
    <div
      className="flex flex-row  justify-around space-x-5 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Avatar src="/Power.svg" alt="Power" className="" />
      <p className="text-[#B34040] text-xl">{powerFields(currentLanguage)}</p>
    </div>
  );
}

export default Power;
