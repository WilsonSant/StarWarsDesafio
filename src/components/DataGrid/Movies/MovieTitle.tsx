import React from "react";
import { Typography } from "antd";

const { Title } = Typography;
function MovieTitle(props) {
    const { title, releaseDate } = props;
  return (
    <div className="flex flex-row  align-middle justify-between bg-[#F0F3F3] rounded">
      <div className="flex p-3">
        <Title level={4}> {title} </Title>
      </div>
      <div className="flex p-3">
        <Title level={4}> {releaseDate} </Title>
      </div>
    </div>
  );
}

export default MovieTitle;
