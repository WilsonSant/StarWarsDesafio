"use client";
import React from "react";
import  Menu from "@/components/Menu/Main";
import { Col, Layout, Row } from "antd";
import DataGrid from "@/components/DataGrid/Main";

function Grid() {
  return (
    <Row className="flex flex-row">
      <Col span={4}>
        <Menu />
      </Col>
      <Col span={20}>
      <DataGrid />
      </Col>
    </Row>
  );
}

export default Grid;
