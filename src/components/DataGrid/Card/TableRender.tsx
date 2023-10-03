import React, { useContext } from "react";
import { CardProvider } from "./context/CardContext";
import { Modal, Table } from "antd";
import { format, parseISO } from "date-fns";

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

  const filterData = dataTable.map((item) => {
    return {
      ...item,
      created: format(parseISO(item.created), formatDate),
      edited: format(parseISO(item.created), formatDate),
    };
  });

  console.log("SHOW TABLE ", showTable)

  function handleCancel() {
    cancelButton();
    setShowTable(false);
  }

  return showTable ? (
    <Modal
      className="flex"
      open={showTable}
      onCancel={() => handleCancel()}
      footer={null}
      title={modalTitle}
    >
      <Table
        dataSource={filterData}
        columns={columnsTable}
        pagination={false}
      />
    </Modal>
  ) : null;
}

export default TableRender;
