"use client";
import React, { useState, useContext, useEffect } from "react";
import CityList from "@/src/components/listcomponants/citylist/CityList";
import { createCityAction, deleteCityAction } from "../../utils/citiesActions";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function CityListwrapper(props) {
  const { dataList } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const [cities, setcities] = useState(dataList);

  const handelCreateCity = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await createCityAction(data);

      if (response.data.status === "success") {
        console.log(response.data.data);
        setcities((prev) => [response.data.data, ...prev]);
        setisBtnLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };

  const handelDeleteCity = async (id) => {
    try {
      const response = await deleteCityAction({ _id: id }); // ✅ pass id in body
      if (response?.data?.status === "success") {
        // remove deleted builder instantly
        setcities((prev) => prev.filter((item) => item._id !== id));
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
