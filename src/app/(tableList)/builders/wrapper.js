import BuilderList from "@/src/components/listcomponants/builderlist/BuilderList";
import React from "react";

export default function Builderswrapper(props) {
  const { dataList } = props;
  return (
    <div>
      <BuilderList apiData={dataList} />{" "}
    </div>
  );
}
