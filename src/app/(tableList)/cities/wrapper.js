"use client";
import React, { useState, useContext, useEffect } from "react";
import CityList from "@/src/components/listcomponants/citylist/CityList";
import { createCityAction, deleteCityAction } from "../../utils/citiesActions";
import { AppContext } from "@/src/_contextApi/AppContext";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";

export default function CityListwrapper(props) {
  const { dataList } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { idForDelete, handelCloseDeleteModel } = useContext(ModelsContext);
  const [cities, setcities] = useState(dataList);

  const handelCreateCity = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await createCityAction(data);

      if (response.status === "success") {
        console.log(response.data);
        setcities((prev) => [response.data, ...prev]);
        setisBtnLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };

  const handelDeleteCity = async (id) => {
    try {
      const response = await deleteCityAction({ _id: idForDelete }); // ✅ pass id in body
      if (response?.status === "success") {
        // remove deleted builder instantly
        setcities((prev) => prev.filter((item) => item._id !== idForDelete));
        handelCloseDeleteModel();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CityList
        apiData={cities}
        handelCreate={handelCreateCity}
        handelDelete={handelDeleteCity}
      />
    </div>
  );
}
