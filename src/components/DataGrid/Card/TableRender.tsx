import React, { useContext, useEffect, useState } from "react";
import { CardProvider } from "./context/CardContext";
import { Input, Modal, Table } from "antd";
import { format, parseISO } from "date-fns";
import { SearchOutlined } from "@ant-design/icons";

function TableRender() {
  const {
    dataTable,
    columnsTable,
    showTable,
    setShowTable,
    modalTitle,
    cancelButton,
    currentLanguage,
  } = useContext(CardProvider);

  const formatDate = currentLanguage === "pt-br" ? "dd/MM/yyyy" : "MM/dd/yyyy";

  function handleSearch(element) {
    setSearchData(
      filterData.filter((item) => item.name.startsWith(element.target.value))
    );
  }

  const filterData = dataTable.map((item) => {
    return {
      ...item,
      created: format(parseISO(item.created), formatDate),
      edited: format(parseISO(item.created), formatDate),
    };
  });

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    setSearchData(filterData);
  }, []);

  function handleCancel() {
    cancelButton();
    setSearchData(filterData);
    setShowTable(false);
  }

  return (
    <Modal
      className="flex"
      open={showTable}
      onCancel={() => handleCancel()}
      footer={null}
      title={modalTitle}
    >
      <div className="flex flex-row justify-end space-x-5">
        <Input
          addonAfter={<SearchOutlined />}
          onChange={(element) => handleSearch(element)}
        />
      </div>
      <Table
        dataSource={searchData}
        columns={columnsTable}
        pagination={false}
      />
    </Modal>
  );
}

export default TableRender;
