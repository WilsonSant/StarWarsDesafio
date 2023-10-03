import React from "react";
import Register from "./Register";
import SelectLanguage from "./SelectLanguage";


function Main() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-500 via-emerald-500 to-neutral-100">
      <div className="flex flex-row">
        <Register />
        <SelectLanguage />
      </div>
    </div>
  );
}

export default Main;
