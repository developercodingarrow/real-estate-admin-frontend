"use client";
import React, { useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
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
      console.log(response);
      if (response.error) {
        toast.error(response.error);
        setisBtnLoading(false);
        return;
      }

      if (response.status === "Fails") {
        toast.error(response.message);
        setisBtnLoading(false);
        return;
      }
      if (response.status === "success") {
        console.log(response.data);
        toast.success("-City created successfully");
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

      if (response.error) {
        toast.error(response.error);
        return;
      }

      if (response?.status === "success") {
        // remove deleted builder instantly
        setcities((prev) => prev.filter((item) => item._id !== idForDelete));
        toast.success("-City Deleted successfully");
        handelCloseDeleteModel();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <CityList
        apiData={cities}
        handelCreate={handelCreateCity}
        handelDelete={handelDeleteCity}
      />
    </div>
  );
}
