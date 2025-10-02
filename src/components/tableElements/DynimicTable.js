import React from "react";
import styles from "./listtable.module.css";
import TextCompoannet from "../elements/elementsparts/TextCompoannet";
import DateCompoannet from "../elements/elementsparts/DateCompoannet";
export default function DynimicTable(props) {
  const { tableColumns, tableData, handelSingleDelete } = props;

  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, indexNo) => {
            return (
              <tr key={row._id || row.id || indexNo}>
                {tableColumns.map((column) => {
                  const { content, className } = renderCellContent(
                    indexNo,
                    column,
                    row,
                    row[column.key]
                  );
                  return (
                    <td key={column.key} className={`${styles[className]}`}>
                      {content}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const renderCellContent = (indexNo, column, row, elemnetdata) => {
  let content = null;
  let className = "";

  switch (column.component) {
    case "number":
      content = indexNo + 1;
      className = "numberCell";
      break;
    case "text":
      content = <TextCompoannet text={elemnetdata} />;
      className = "";
      break;
    case "date":
      content = <DateCompoannet data={elemnetdata} />;
      className = "";
      break;
    default:
      content = elemnetdata;
      break;
  }

  return {
    content,
    className,
  };
};
