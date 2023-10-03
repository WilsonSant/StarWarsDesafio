import React from "react";

function CardTemplate(props) {
  const { shadow, shadowCSS, handleClick, children, toClick } = props;
  return (
    <div
      className={`${
        shadow
          ? `rounded bg-white p-5 pr-12 ${shadowCSS} shadow-lg cursor-pointer`
          : `rounded bg-white p-5 pr-12 ${toClick && "cursor-pointer"}`
      }`}
      onClick={toClick ? handleClick : null}
    >
      {children}
    </div>
  );
}

export default CardTemplate;
