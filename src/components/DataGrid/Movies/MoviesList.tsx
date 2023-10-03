import React, { Fragment, useEffect, useState } from "react";
import { IMovies } from "@/types";
import { Skeleton } from "antd";
import { getMovies } from "@/services";
import { dateFormat } from "../../../../fable/utils/components/Movie.fs.js";
import { format, parseISO } from "date-fns";
import MovieTitle from "./MovieTitle";

function MoviesList(props) {
  const { currentLanguage } = props;
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [loading, setLoading] = useState(false);
  const dateType = dateFormat(currentLanguage);

  // Renderiza os 3 primeiros e 3 últimos em colunas
  // Renders the first 3 and the last 3 in a new column
  function MovieMap() {
    const firstThree = movies.slice(0, 3);
    const lastThree = movies.slice(-3);
    return (
      <Fragment>
        <div className="flex flex-col space-y-5 grow">
          {firstThree.map((movie, index) => (
            <MovieTitle
              key={index}
              title={movie.title}
              releaseDate={format(parseISO(movie.release_date), dateType)}
            />
          ))}
        </div>
        <div className="flex flex-col space-y-5 grow">
          {lastThree.map((movie, index) => (
            <MovieTitle
              key={index}
              title={movie.title}
              releaseDate={format(parseISO(movie.release_date), dateType)}
            />
          ))}
        </div>
      </Fragment>
    );
  }

  useEffect(() => {
    getMovies(setMovies);
  }, []);

  useEffect(() => {
    setLoading(movies.length === 0);
  }, [movies]);

  return loading ? <Skeleton active /> : <MovieMap />;
}

export default MoviesList;
