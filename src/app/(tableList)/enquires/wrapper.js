import EnquireList from "@/src/components/listcomponants/enquirelist/EnquireList";
import React from "react";

export default function EnquireListWrapper(props) {
  const { dataList } = props;
  return (
    <div>
      <EnquireList apiData={dataList} />
    </div>
  );
}
