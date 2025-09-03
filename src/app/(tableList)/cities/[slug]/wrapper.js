import LocationList from "@/src/components/listcomponants/locationList/LocationList";
import React from "react";

export default function LocationListwrapper(props) {
  const { data, slug } = props;

  return (
    <div>
      <LocationList apiData={data} slug={slug} />
    </div>
  );
}
