"use client";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/src/_contextApi/AppContext";
import AmenitiesList from "@/src/components/listcomponants/amenitiesList/AmenitiesList";
import {
  createAmanitiesAction,
  deleteAmanitiesAction,
} from "../../utils/amnitiesActions";

export default function AmenitiesWrapper(props) {
  const { dataList } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const [cities, setcities] = useState(dataList);

  const handelCreateAmanite = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await createAmanitiesAction(data);
      console.log("response---", response);
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

  const handelDeleteAmenitie = async (id) => {
    try {
      const response = await deleteAmanitiesAction({ _id: id }); // ✅ pass id in body
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
      <AmenitiesList
        apiData={cities}
        handelCreate={handelCreateAmanite}
        handelDelete={handelDeleteAmenitie}
      />
    </div>
  );
}
