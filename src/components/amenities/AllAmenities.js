"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import CustomeCheckBox from "../inputsElements/CustomeCheckBox";
import styles from "./projectamenities.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { allAmnitiesAction } from "@/src/app/utils/amnitiesActions";
import { updateProjectAmnitiesAction } from "@/src/app/utils/projectActions";
import ClickBtn from "../elements/buttons/ClickBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
import { useParams, useRouter } from "next/navigation";

export default function AllAmenities(props) {
  const router = useRouter();
  const { apiData, slug, onBack, onNext } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [amnitiesList, setamnitiesList] = useState([]);

  const handleAmenityChange = (e, amenity) => {
    const isChecked = e.target.checked;

    setSelectedAmenities(
      (prev) =>
        isChecked
          ? [...prev, amenity] // add full object
          : prev.filter((item) => item._id !== amenity._id) // remove by _id
    );
  };

  const fetchAmenities = async () => {
    const res = await allAmnitiesAction();
    if (res.data.status === "success") {
      const allAmenities = res.data.data;
      // match amenities from apiData with fetched amenities
      const preSelected = allAmenities.filter((a) =>
        apiData.amenities.includes(a._id)
      );
      setamnitiesList(allAmenities);
      setSelectedAmenities(preSelected);
    } else {
      console.error("Failed to fetch amenities:", res.error);
    }
  };

  // call API to update project amenities
  const handelAddAmenities = async () => {
    try {
      setisBtnLoading(true);
      const payload = {
        amenities: selectedAmenities.map((a) => a._id), // only send IDs
      };

      const res = await updateProjectAmnitiesAction(payload, slug);

      if (res.data.status === "success") {
        toast.success(res.data.message);
        setisBtnLoading(false);
        router.refresh();
      }
    } catch (error) {
      router.refresh();
      setisBtnLoading(false);
    }
  };

  useEffect(() => {
    fetchAmenities();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className={styles.amnities_container}>
        <div className={styles.amnities_wrapper}>
          {amnitiesList.map((item) => (
            <div key={item.value} className={styles.amenity_item}>
              <CustomeCheckBox
                label={item.name}
                value={item.slug}
                name="amenities"
                id={item._id}
                checked={selectedAmenities.some((a) => a._id === item._id)}
                onChange={(e) => handleAmenityChange(e, item)}
                labelPosition="right"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.updateBtn_wrapper}>
        {selectedAmenities.length > 0 && (
          <ClickBtn
            btnText="update"
            handelClick={handelAddAmenities}
            className={styles.submit_btn}
            btnLoading={isBtnLoading}
          >
            Save Amenities
          </ClickBtn>
        )}
        <ClickBtn btnText="Back" handelClick={onBack} />
        <ClickBtn btnText="Next" handelClick={onNext} />
      </div>
    </div>
  );
}
