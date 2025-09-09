"use client";
import React, { useState, useContext, useEffect } from "react";
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

  const handelDeleteAmenitie = async () => {
    try {
      const response = await deleteAmanitiesAction({ _id: idForDelete }); // ✅ pass id in body
      if (response?.status === "success") {
        setcities((prev) => prev.filter((item) => item._id !== idForDelete));
        handelCloseDeleteModel();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AmenitiesList
        apiData={cities}
        handelCreate={handelCreateAmanite}
        handelDelete={handelDeleteAmenitie}
      />
    </div>
  );
}
