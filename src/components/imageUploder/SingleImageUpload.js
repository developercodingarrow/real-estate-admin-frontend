"use client";
import React, { useContext, useEffect, useState, useRef, use } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import styles from "./css/imageUplaoder.module.css";
import useImageUpload from "@/src/_custome_hooks/useImageUpload";
import Image from "next/image";
import { MdDeleteForever } from "../ApplicationIcons";
import { handeluplodProjectImage } from "@/src/app/imghandlers/imageHandlers";
import { deleteProjectImages } from "@/src/app/utils/projectActions";
import ClickBtn from "../elements/buttons/ClickBtn";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function SingleImageUpload(props) {
  const { slug, apiData } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);

  const fileInputRef = useRef(null);
  // 🔥 keep API image in state so UI updates immediately after delete
  const [serverImage, setServerImage] = useState(
    apiData?.projectImage?.url || null
  );
  const {
    previewImage,
    setPreviewImage,
    image,
    handleImageUpload,
    removeImg,
    handleSave,
  } = useImageUpload(apiData, "projectImage");

  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

  const handelSubmit = async () => {
    try {
      setisBtnLoading(true);
      const res = await handeluplodProjectImage(image, "projectImage", slug);

      if (res.error) {
        console.log(res.error);
        setisBtnLoading(false);
        return;
      }

      console.log(res.data);
      if (res.data.status === "success") {
        // ✅ update server image after upload
        toast.success(res.data.message);
        setServerImage(res?.data?.url || null);
        setisBtnLoading(false);
      }
    } catch (error) {
      console.log("Error uploading image:", error);
      setisBtnLoading(false);
    }
  };

  const handelDeleteImg = async () => {
    try {
      const res = await deleteProjectImages(slug);
      console.log(res);
      if (res.error) {
        console.log(res.error);
        return;
      }
      if (res.data.status === "success") {
        // ✅ update server image after upload
        toast.success(res.data.message);
        setPreviewImage(null);
        setServerImage(null);
      }
    } catch (error) {
      console.log("Error deleting image:", error);
    }
  };

  return (
    <div className={styles.singleImg_wrapper}>
      <ToastContainer />
      <div className={styles.singleImg_Maincontainer}>
        {previewImage ? (
          <div className={styles.single_img_prevWrapper}>
            {" "}
            <Image
              src={previewImage}
              width={500}
              height={500}
              alt="image alt text"
              className={styles.img_style}
            />
            <div className={styles.remove_prvImg} onClick={removeImg}>
              <MdDeleteForever />
            </div>
          </div>
        ) : serverImage ? (
          <div className={styles.single_img_prevWrapper}>
            <Image
              src={apiData.projectImage.url}
              width={500}
              height={500}
              alt="Project Image"
              className={styles.img_style}
            />
            <div className={styles.remove_prvImg} onClick={handelDeleteImg}>
              <MdDeleteForever />
            </div>
          </div>
        ) : (
          <div
            className={styles.singleImg_innerContainer}
            onClick={handleBoxClick}
          >
            <div className={styles.singleImg_centerBox}>
              <div className={styles.img_info}>
                Uplod your Photo here max size 10MB. formats: png,jpg,webp
              </div>
              <div className={styles.img_uplodBtn}>Upload Photo Now</div>
            </div>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>

      <div className={styles.singleImg_submitBtn_wrapper}>
        <ClickBtn
          btnText="Update"
          handelClick={handelSubmit}
          btnLoading={isBtnLoading}
        />
      </div>
    </div>
  );
}
