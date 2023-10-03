import React from "react";
import CardTemplate from "@/components/CardTemplate";
import Image from "next/image";

function CustomCard(props) {
  const { object, handleClick } = props;
  return (
    <div className="flex flex-col space-y-12">
      <div className="flex flex-col flex-shrink justify-center">
        <CardTemplate
          shadow={object.read}
          shadowCSS={object.colorCSS}
          handleClick={() => handleClick(object.read, object.set, object.data, object.columns, object.title)}
          toClick={true}
        >
          <p className="txt-lg font-semibold text-gray-400"> {object.title} </p>
          <div className="flex flex-row align-middle space-x-3">
            <Image
              src={object.logo}
              width={35}
              height={35}
              alt={object.alt}
              quality={100}
            />
            <p className="text-3xl  mb-1"> {object.data.length} </p>
          </div>
        </CardTemplate>
      </div>
    </div>
  );
}
export default CustomCard;
