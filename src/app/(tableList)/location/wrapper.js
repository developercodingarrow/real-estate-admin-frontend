"use client";
import React, { useState, useContext, useEffect } from "react";
import CityList from "@/src/components/listcomponants/citylist/CityList";
import { AppContext } from "@/src/_contextApi/AppContext";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import {
  createLocationAction,
  deleteLocationAction,
} from "../../utils/locationActions";
import LocationList from "@/src/components/listcomponants/locationlists/LocationList";

export default function LocationWrapper(props) {
  const { dataList } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { idForDelete, handelCloseDeleteModel } = useContext(ModelsContext);
  const [locations, setlocations] = useState(dataList);

  const handelCreateLocation = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await createLocationAction(data);

      if (response.status === "success") {
        console.log(response.data);
        setlocations((prev) => [response.data, ...prev]);
        setisBtnLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };

  const handelDeleteLocation = async (id) => {
    try {
      const response = await deleteLocationAction({ _id: idForDelete }); // ✅ pass id in body
      if (response?.status === "success") {
        // remove deleted builder instantly
        setlocations((prev) => prev.filter((item) => item._id !== idForDelete));
        handelCloseDeleteModel();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <LocationList
        apiData={locations}
        handelCreate={handelCreateLocation}
        handelDelete={handelDeleteLocation}
      />
    </div>
  );
}
