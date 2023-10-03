import { Button } from "antd";
import React from "react";
import { getFooterButtonsField } from "../../../fable/utils/components/Register.fs.js";

function Footer(props) {
  const { currentLanguage, logGuest, handleClick } = props;
  return (
    <div className="flex justify-center space-x-4">
      <Button type="primary" danger onClick={() => handleClick()}>
        {getFooterButtonsField(false, currentLanguage)}
      </Button>
      <Button type="primary" className="bg-blue-600" onClick={() => logGuest()}>
        {getFooterButtonsField(true, currentLanguage)}
      </Button>
    </div>
  );
}

export default Footer;
