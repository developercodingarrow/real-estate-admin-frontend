"use client";
import React, { useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
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
      if (response.error) {
        toast.error(response.error);
        return;
      }
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
        toast.success("-Location created successfully");
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
        toast.success("-Location Deleted successfully");
        handelCloseDeleteModel();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ToastContainer />
      <LocationList
        apiData={locations}
        handelCreate={handelCreateLocation}
        handelDelete={handelDeleteLocation}
      />
    </div>
  );
}
