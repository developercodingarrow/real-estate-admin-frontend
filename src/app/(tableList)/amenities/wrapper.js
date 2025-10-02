"use client";
import React, { useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { AppContext } from "@/src/_contextApi/AppContext";
import AmenitiesList from "@/src/components/listcomponants/amenitiesList/AmenitiesList";
import {
  createAmanitiesAction,
  deleteAmanitiesAction,
} from "../../utils/amnitiesActions";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";

export default function AmenitiesWrapper(props) {
  const { dataList } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const [cities, setcities] = useState(dataList);
  const { idForDelete, handelCloseDeleteModel } = useContext(ModelsContext);

  const handelCreateAmanite = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await createAmanitiesAction(data);
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
        setcities((prev) => [response.data, ...prev]);
        toast.success("-Amnities created successfully");
        setisBtnLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };

  const handelDeleteAmenitie = async () => {
    try {
      const response = await deleteAmanitiesAction({ _id: idForDelete }); // ✅ pass id in body
      if (response.error) {
        toast.error(response.error);
        return;
      }
      if (response?.status === "success") {
        setcities((prev) => prev.filter((item) => item._id !== idForDelete));
        toast.success("-Amnities Deleted successfully");
        handelCloseDeleteModel();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ToastContainer />
      <AmenitiesList
        apiData={cities}
        handelCreate={handelCreateAmanite}
        handelDelete={handelDeleteAmenitie}
      />
    </div>
  );
}
