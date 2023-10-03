import CardTemplate from "@/components/CardTemplate";
import React from "react";
import { Typography } from "antd";
import MoviesList from "./MoviesList";
import { movieFields } from "../../../../fable/utils/components/Movie.fs.js";
import { useAtom } from "jotai";
import { languageAtom } from "@/atoms/global";
const { Title } = Typography;
function Movies() {
  const [currentLanguage] = useAtom(languageAtom);

  return (
    <div className="flex flex-col">
      <CardTemplate shadow={false}>
        <div className="p-3">
          <Title level={3}> {movieFields(currentLanguage)} </Title>
        </div>
        <div className="flex space-x-10 justify-between ">
          <MoviesList {...{ currentLanguage }} />
        </div>
      </CardTemplate>
    </div>
  );
}

export default Movies;
