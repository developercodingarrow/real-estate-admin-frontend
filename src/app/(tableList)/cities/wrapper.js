import CityList from "@/src/components/listcomponants/citylist/CityList";
import React from "react";

export default function CityListwrapper(props) {
  const { dataList } = props;
  return (
    <div>
      <CityList apiData={dataList} />
    </div>
  );
}
