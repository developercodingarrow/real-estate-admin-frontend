"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "./css/imageUplaoder.module.css";
import useImageUpload from "@/src/_custome_hooks/useImageUpload";
import Image from "next/image";
import { MdDeleteForever } from "../ApplicationIcons";
export default function SingleImageUpload() {
  const fileInputRef = useRef(null);
  const {
    previewImage,
    setPreviewImage,
    image,
    handleImageUpload,
    removeImg,
    handleSave,
  } = useImageUpload("blogThumblin");

  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };
  return (
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
  );
}
